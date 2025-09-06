};

export default function ITServicesPage() {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustrySolution
            title="Healthcare IT"
            description="HIPAA-compliant infrastructure and secure patient data management"
            solutions={["HIPAA compliance", "Patient data security", "Telemedicine platforms", "Medical imaging systems"]}
            icon="🏥"
          />
          <IndustrySolution
            title="Financial Services"
            description="Secure, compliant infrastructure for financial institutions"
            solutions={["PCI DSS compliance", "Fraud detection systems", "High-frequency trading", "Risk management"]}
            icon="💰"
          />
          <IndustrySolution
            title="E-commerce"
            description="Scalable infrastructure for high-traffic online stores"
            solutions={["Auto-scaling", "CDN optimization", "Payment processing", "Inventory management"]}
            icon="🛒"
          />
          <IndustrySolution
            title="Manufacturing"
            description="IoT and industrial automation infrastructure"
            solutions={["IoT platforms", "Predictive maintenance", "Supply chain optimization", "Quality control"]}
            icon="🏭"
          />
          <IndustrySolution
            title="Education"
            description="Learning management systems and educational technology"
            solutions={["LMS platforms", "Virtual classrooms", "Student data management", "Online assessments"]}
            icon="🎓"
          />
          <IndustrySolution
            title="Government"
            description="Secure, compliant infrastructure for government agencies"
            solutions={["FedRAMP compliance", "Secure communications", "Data sovereignty", "Disaster recovery"]}
            icon="🏛️"
          />
        </div>
      </section>

      <Pricing />
  );
}

          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
      >
        Get Started
      </a>
    </div>
  );
}

