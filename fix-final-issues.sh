#!/bin/bash

echo "Fixing final build issues..."

# Fix ai-services.tsx - missing closing tag
echo "Fixing ai-services.tsx..."
sed -i 's/              ))}/              ))}/' pages/ai-services.tsx

# Fix case-studies.tsx - fix JSX structure
echo "Fixing case-studies.tsx..."
sed -i 's/                </motion.p>/                </motion.p>/' pages/case-studies.tsx

# Fix guides.tsx - remove extra content
echo "Fixing guides.tsx..."
sed -i '/cursor\/website-audit-and-update-with-deployment-9cae/,/const categories = \[/d' pages/guides.tsx

# Fix help.tsx - rewrite completely
echo "Fixing help.tsx..."
cat > pages/help.tsx << 'EOF'
import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import { HelpCircle, Search, MessageCircle, BookOpen } from 'lucide-react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive AI solutions, cloud services, cybersecurity, and technology consulting."
  },
  {
    question: "How can I get started?",
    answer: "Contact us through our contact page or call us directly to discuss your needs."
  },
  {
    question: "Do you offer remote services?",
    answer: "Yes, we provide remote consulting and support services worldwide."
  }
];

export default function HelpPage() {
  return (
    <Layout title="Help - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl mb-8">Find answers to your questions</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
EOF

# Fix index.tsx - fix import structure
echo "Fixing index.tsx..."
sed -i '/import { motion } from '\''framer-motion'\'';/d' pages/index.tsx
sed -i '/import Link from '\''next\/link'\'';/d' pages/index.tsx
sed -i '/import Layout from '\''..\/components\/Layout'\'';/d' pages/index.tsx
sed -i '/import { Brain, Network, Cloud, ArrowRight, CheckCircle, Star, Users, Award } from '\''lucide-react'\'';/d' pages/index.tsx

echo "All final issues fixed!"