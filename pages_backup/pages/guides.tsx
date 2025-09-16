import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
  Star
} from 'lucide-react';

const guides = [
  {
    title: 'Getting Started Guide',
    description: 'Learn the basics of our platform',
    difficulty: 'Intermediate',
    sections: 12,
    downloads: 980,
    color: 'from-green-500 to-blue-500'
  }
];

export default function GuidesPage() {
  return (
    <div>
      <h1>Guides</h1>
    </div>
  );
}