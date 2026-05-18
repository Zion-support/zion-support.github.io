"""
Generate 38 missing micro-SaaS catalog pages as /app/{slug}/page.tsx files.
"""
import os, re

catalog_path = '/Users/klebergarciaalcatrao/app/data/microSaasCatalog.ts'
app_dir = '/Users/klebergarciaalcatrao/app'

with open(catalog_path) as f:
    catalog_text = f.read()

entries = []
for m in re.finditer(
    r"slug:\s*'(.+?)'\s*,\s*\n.*?name:\s*'(.+?)'\s*,\s*\n.*?category:\s*'(.+?)'\s*,\s*\n.*?icon:\s*(?:'(.+?)'|\"(.+?)\")\s*,\s*\n.*?description:\s*'(.+?)'",
    catalog_text, re.DOTALL
):
    icon = m.group(4) or m.group(5)
    entries.append({
        'slug': m.group(1),
        'name': m.group(2),
        'category': m.group(3),
        'icon': icon,
        'desc': m.group(6),
    })

print(f"Parsed {len(entries)} entries")

TEMPLATE = r"""import ProductPageLayout from '../components/ProductPageLayout';

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: '{name}',
        category: '{category}',
        description: '{desc}',
        iconEmoji: '{icon}',
        features: [
          {{
            title: 'Intelligent Core',
            description: "State-of-the-art AI capabilities embedded directly into the {name} workflow, enabling smart automation and real-time decision support."
          }},
          {{
            title: 'Production Architecture',
            description: "Enterprise-grade reliability with auto-scaling, high availability, and comprehensive observability built in from day one."
          }},
          {{
            title: 'Seamless Integration',
            description: "Connect {name} with your existing tools, APIs, and data sources through pre-built connectors and flexible webhooks."
          }},
          {{
            title: 'Security & Compliance',
            description: "Built-in encryption, audit trails, and role-based access controls to meet SOC 2, GDPR, and industry-specific requirements."
          }},
          {{
            title: 'Advanced Analytics',
            description: "Live dashboards and AI-driven insights that give you instant visibility into performance, usage, and business impact."
          }},
          {{
            title: 'Customizable Workflows',
            description: "Tailor {name} to your specific needs with a no-code rule builder, configurable pipelines, and extensible API."
          }}
        ],
        useCases: [
          {{
            title: 'Operational Efficiency',
            description: 'Automate routine tasks with {name}, reduce manual errors, and free your team to focus on strategic priorities.',
            icon: '⚡'
          }},
          {{
            title: 'Scalable Growth',
            description: 'Handle increasing complexity and volume without proportional headcount increases.',
            icon: '📈'
          }},
          {{
            title: 'Data-Driven Decisions',
            description: 'Leverage {name} insights to make faster, more confident decisions backed by real operational data.',
            icon: '🎯'
          }}
        ],
        benefits: [
          'Reduced operational costs',
          'Faster time to value',
          'Improved team productivity',
          'Scalable multi-tenant architecture',
          'Enterprise-grade security',
          'Measurable ROI tracking',
          'Continuous AI-powered improvement',
          'Seamless ecosystem integration'
        ],
        pricing: [
          {{
            tier: 'Starter',
            price: '$49',
            period: '/month',
            features: [
              'Up to 5,000 AI operations/month',
              'Core workflow automation',
              'Email support',
              '99% uptime SLA'
            ]
          }},
          {{
            tier: 'Professional',
            price: '$149',
            period: '/month',
            features: [
              'Up to 50,000 AI operations/month',
              'Advanced integrations & webhooks',
              'Priority support',
              '99.5% uptime SLA',
              'Usage analytics dashboard',
              'Team collaboration (10 seats)'
            ],
            popular: true
          }},
          {{
            tier: 'Enterprise',
            price: 'Custom',
            period: '',
            features: [
              'Unlimited AI operations',
              'On-premise or VPC deployment',
              'Dedicated account manager',
              'Custom SLA with 99.99% uptime',
              'Unlimited seats & workspaces',
              'Private model fine-tuning'
            ]
          }}
        ],
        contact: {{
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown, DE 19709'
        }},
        ctaLabel: 'Get Started with {name}',
        ctaHref: '/contact?topic={slug}',
        secondaryCtaLabel: 'View All Services',
        secondaryCtaHref: '/services'
      }}
    />
  );
}
"""

created = 0
errors = []

for entry in entries:
    slug = entry['slug']
    dir_path = os.path.join(app_dir, slug)
    page_path = os.path.join(dir_path, 'page.tsx')

    if os.path.exists(page_path):
        continue

    try:
        os.makedirs(dir_path, exist_ok=True)

        # We'll fill {name}/{category}/{desc}/{icon}/{slug} after final RBI-safe escape
        name = entry['name']
        category = entry['category']
        desc = entry['desc'].replace("'", "\\'")
        icon = entry['icon']
        slug_val = slug

        page_content = (
            "import ProductPageLayout from '../components/ProductPageLayout';\n"
            "\n"
            "export default function Page() {\n"
            "  return (\n"
            '    <ProductPageLayout\n'
            '      data={{\n'
            f"        title: '{name}',\n"
            f"        category: '{category}',\n"
            f"        description: '{desc}',\n"
            f"        iconEmoji: '{icon}',\n"
            "        features: [\n"
            "          {\n"
            '            title: \'Intelligent Core\',\n'
            '            description: `State-of-the-art AI capabilities embedded directly into the <em>{name}</em> workflow, enabling smart automation and real-time decision support.`\n'
            "          },\n"
            "          {\n"
            '            title: \'Production Architecture\',\n'
            '            description: `Enterprise-grade reliability with auto-scaling, high availability, and comprehensive observability built in from day one.`\n'
            "          },\n"
            "          {\n"
            '            title: \'Seamless Integration\',\n'
            '            description: `Connect <em>{name}</em> with your existing tools, APIs, and data sources through pre-built connectors and flexible webhooks.`\n'
            "          },\n"
            "          {\n"
            '            title: \'Security & Compliance\',\n'
            '            description: `Built-in encryption, audit trails, and role-based access controls to meet SOC 2, GDPR, and industry-specific requirements.`\n'
            "          },\n"
            "          {\n"
            '            title: \'Advanced Analytics\',\n'
            '            description: `Live dashboards and AI-driven insights that give you instant visibility into performance, usage, and business impact.`\n'
            "          },\n"
            "          {\n"
            '            title: \'Customizable Workflows\',\n'
            '            description: `Tailor processes with a no-code rule builder, configurable pipelines, and extensible API for your specific needs.`\n'
            "          }\n"
            "        ],\n"
            "        useCases: [\n"
            "          {\n"
            "            title: 'Operational Efficiency',\n"
            f"            description: 'Automate routine tasks with <em>{name}</em>, reduce manual errors, and free your team to focus on strategic priorities.',\n"
            "            icon: '⚡'\n"
            "          },\n"
            "          {\n"
            "            title: 'Scalable Growth',\n"
            "            description: 'Handle increasing complexity and volume without proportional headcount increases.',\n"
            "            icon: '📈'\n"
            "          },\n"
            "          {\n"
            "            title: 'Data-Driven Decisions',\n"
            f"            description: 'Leverage {name} insights to make faster, more confident decisions backed by real operational data.',\n"
            "            icon: '🎯'\n"
            "          }\n"
            "        ],\n"
            "        benefits: [\n"
            "          'Reduced operational costs',\n"
            "          'Faster time to value',\n"
            "          'Improved team productivity',\n"
            "          'Scalable multi-tenant architecture',\n"
            "          'Enterprise-grade security',\n"
            "          'Measurable ROI tracking',\n"
            "          'Continuous AI-powered improvement',\n"
            "          'Seamless ecosystem integration'\n"
            "        ],\n"
            "        pricing: [\n"
            "          {\n"
            "            tier: 'Starter',\n"
            "            price: '$49',\n"
            "            period: '/month',\n"
            "            features: [\n"
            "              'Up to 5,000 AI operations/month',\n"
            "              'Core workflow automation',\n"
            "              'Email support',\n"
            "              '99% uptime SLA'\n"
            "            ]\n"
            "          },\n"
            "          {\n"
            "            tier: 'Professional',\n"
            "            price: '$149',\n"
            "            period: '/month',\n"
            "            features: [\n"
            "              'Up to 50,000 AI operations/month',\n"
            "              'Advanced integrations & webhooks',\n"
            "              'Priority support',\n"
            "              '99.5% uptime SLA',\n"
            "              'Usage analytics dashboard',\n"
            "              'Team collaboration (10 seats)'\n"
            "            ],\n"
            "            popular: true\n"
            "          },\n"
            "          {\n"
            "            tier: 'Enterprise',\n"
            "            price: 'Custom',\n"
            "            period: '',\n"
            "            features: [\n"
            "              'Unlimited AI operations',\n"
            "              'On-premise or VPC deployment',\n"
            '              \'Dedicated account manager\',\n'
            "              'Custom SLA with 99.99% uptime',\n"
            "              'Unlimited seats & workspaces',\n"
            "              'Private model fine-tuning'\n"
            "            ]\n"
            "          }\n"
            "        ],\n"
            "        contact: {\n"
            f"          phone: '+1 302 464 0950',\n"
            f"          email: 'kleber@ziontechgroup.com',\n"
            f"          address: '364 E Main St STE 1008, Middletown, DE 19709'\n"
            "        },\n"
            f"        ctaLabel: 'Get Started with {name}',\n"
            f"        ctaHref: '/contact?topic={slug_val}',\n"
            "        secondaryCtaLabel: 'View All Services',\n"
            "        secondaryCtaHref: '/services'\n"
            "      }}\n"
            "    />\n"
            "  );\n"
            "}\n"
        )

        with open(page_path, 'w') as f:
            f.write(page_content)
        created += 1
        print(f"✓ Created {slug}/page.tsx")
    except Exception as e:
        errors.append((slug, str(e)))
        print(f"✗ ERROR {slug}: {e}")

print(f"\n=== SUMMARY ===")
print(f"Created: {created}")
print(f"Errors: {len(errors)}")
if errors:
    for slug, err in errors:
        print(f"  {slug}: {err}")
