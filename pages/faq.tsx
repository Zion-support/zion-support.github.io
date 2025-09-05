
const faqs = [;
  {}
    category: "General","
    questions: [;
      {}
        question: "What services does Zion Tech Group offer?","
        answer: "We offer comprehensive AI solutions, IT services, cloud computing, cybersecurity, and micro SaaS solutions. Our services include machine learning, natural language processing, cloud infrastructure, and custom software development.""
      },
      {}
        question: "How can I get started with your services?","
        answer: "Getting started is easy! Simply contact us through our contact form, schedule a consultation, or call us directly. We'll assess your needs and provide a customized solution plan.""
      },
      {}
        question: "Do you offer 24/7 support?","
        answer: "Yes, we provide 24/7 support for all our clients. Our dedicated support team is always available to help with any technical issues or questions you may have.""
      }
    ];
  },
  {}
    category: "AI Services","
    questions: [;
      {}
        question: "What AI technologies do you specialize in?","
        answer: "We specialize in machine learning, natural language processing, computer vision, predictive analytics, and AI automation. Our team has extensive experience with various AI frameworks and platforms.""
      },
      {}
        question: "How long does it take to implement an AI solution?","
        answer: "Implementation time varies depending on the complexity of the project. Simple AI solutions can be deployed in 2-4 weeks, while more complex enterprise solutions may take 3-6 months.""
      },
      {}
        question: "Do you provide AI training for our team?","
        answer: "Yes, we offer comprehensive AI training programs for your team, including hands-on workshops, documentation, and ongoing support to ensure successful adoption.""
import MainLayout from '../components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search, 
  ArrowRight,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';

const faqCategories = [
  {
    name: "General",
    icon: HelpCircle,
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive technology solutions including AI services, IT services, and Micro SaaS products. Our AI services include machine learning, natural language processing, computer vision, and predictive analytics. Our IT services cover cloud infrastructure, cybersecurity, network management, and custom development. Our Micro SaaS products range from business automation tools to specialized industry solutions."
      },
      {
        question: "How can I get started with your services?",
        answer: "Getting started is easy! You can contact us through our website, call us at +1 302 464 0950, or email us at kleber@ziontechgroup.com. We offer free consultations to understand your needs and provide customized solutions. Our team will work with you to develop a project plan that fits your budget and timeline."
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available around the clock to help with any issues or questions you may have. We also offer different support tiers depending on your needs, including dedicated support for enterprise clients."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, education, and government. Our solutions are tailored to meet the specific needs and compliance requirements of each industry we work with."
      }
    ]
  },
  {
    name: "AI Services",
    icon: HelpCircle,
    questions: [
      {
        question: "What AI technologies do you specialize in?",
        answer: "We specialize in machine learning, deep learning, natural language processing, computer vision, predictive analytics, and AI automation. Our team has expertise in various AI frameworks including TensorFlow, PyTorch, and cloud AI services from AWS, Azure, and Google Cloud."
      },
      {
        question: "How long does it take to implement an AI solution?",
        answer: "Implementation time varies depending on the complexity of the project. Simple AI solutions can be implemented in 2-4 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
      },
      {
        question: "Do you provide AI training and consulting?",
        answer: "Yes, we offer comprehensive AI training and consulting services. Our team can help your organization understand AI capabilities, develop AI strategies, and train your staff on AI tools and technologies. We also provide ongoing support to ensure successful AI adoption."
      },
      {
        question: "What data do you need for AI projects?",
        answer: "The data requirements depend on the specific AI project. We typically need relevant historical data, current data sources, and clear objectives for the AI system. We can help you identify and prepare the right data for your AI project, including data cleaning, preprocessing, and validation."
      }
    ]
  },
  {
    name: "IT Services",
    icon: HelpCircle,
    questions: [
      {
        question: "What IT infrastructure services do you provide?",
        answer: "We provide comprehensive IT infrastructure services including cloud migration, network design and implementation, cybersecurity solutions, server management, database administration, and disaster recovery planning. Our services cover both on-premise and cloud-based infrastructure."
      },
      {
        question: "Do you offer cloud migration services?",
        answer: "Yes, we specialize in cloud migration services for AWS, Azure, and Google Cloud platforms. Our migration process includes assessment, planning, execution, and optimization to ensure a smooth transition with minimal downtime and maximum performance."
      },
      {
        question: "What cybersecurity measures do you implement?",
        answer: "We implement comprehensive cybersecurity measures including firewalls, intrusion detection systems, encryption, access controls, security monitoring, and compliance management. We also provide security audits, penetration testing, and ongoing security monitoring services."
      },
      {
        question: "Do you provide ongoing IT support?",
        answer: "Yes, we offer various levels of ongoing IT support including basic support, managed services, and dedicated IT teams. Our support services cover monitoring, maintenance, updates, troubleshooting, and proactive problem prevention."
      }
    ];
  },
            </motion.div>
          </div>
        </section>

              </div>
            </div>
          </div>
        </section>
  );
}