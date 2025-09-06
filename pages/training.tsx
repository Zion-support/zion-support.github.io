<<<<<<< HEAD
import React, { useState } from 'react',
import SEO from '../components/SEO',
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, Award, BookOpen, Video;
  Headphones, Code, Brain, Atom, Rocket, Shield, Zap;
  Star, CheckCircle, ArrowRight, ChevronDown, ChevronUp;
  Play, Download, ExternalLink, Calendar, MapPin, DollarSign;
  TrendingUp, Target, Lightbulb, Building, Globe, Server
 } from 'lucide-react';
export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null),

  const trainingCategories = null;
=======
import React from 'react';
import Layout from '../components/Layout';
export default function Training() {
  return (
    <Layout
      title="Training & Education - Zion Tech Group"
      description="Professional training and education services for technology professionals."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Training & Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional training and education services for technology professionals.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Training page is under construction.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
}
  )
}
export default Training;
};export default Training;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
