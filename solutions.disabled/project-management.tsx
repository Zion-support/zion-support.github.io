import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

:pages/solutions/project-management.tsx
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

import { Badge } from '../../components/ui/Badge';
:solutions.disabled/project-management.tsx
import {
  FolderKanban,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  BarChart3,
  Target,
  FileText,
  MessageSquare } from 'lucide-react';


export default function ProjectManagement() {
  const features = [
  {
      icon: Target,
      title: 'Task Management',
      description:'
        'Create, assign, and track tasks with priority levels and due dates.' }, {
      icon: Users,
      title: 'Team Collaboration',
      description:'
        'Real-time collaboration tools for seamless team communication.' }, {
      icon: Clock,
      title: 'Time Tracking',
      description:'
        'Track time spent on projects and tasks with detailed reporting.' }, {
      icon: BarChart3,
      title: 'Reporting & Analytics',
      description:'
        'Comprehensive reports on project progress and team productivity.' }, {
      icon: FileText,
      title: 'Document Management',
      description:'
        'Centralized document storage and version control for all project files.' }, {
      icon: MessageSquare,
      title: 'Communication Hub',
      description:'
        'Integrated messaging and discussion threads for project communication.' } ];

  return (
    <>

        title="Project Management Platform - Zion Tech Group"
        description="Advanced project management tools with team collaboration, task tracking, and reporting. Streamline your projects."
:solutions.disabled/project-management.tsx
        keywords="project management, task management, team collaboration, time tracking, project planning"
      />


      <Head>
        <title>Project Management Platform - Zion Tech Group</title>
      </Head>

:solutions.disabled/project-management.tsx
                {' '}
                Platform
              </span>
            </h1>'
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your projects with advanced management tools, team
              collaboration features, and comprehensive reporting capabilities.
            </p>"
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial"
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button"
                size="lg""
                variant="outline""
                className="border-white text-white hove,
    r:bg-white hove,
    r:text-gray-900"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}"
      <section className="py-20 bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl m,
    d:text-4xl font-bold text-gray-900 mb-4">
              Advanced Project Management Features
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to plan, execute, and deliver successful
              projects on time and within budget.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}"
                className="p-6 hover: shadow-xl transition-shadow duration-300"
              >"
                <div className="flex items-center mb-4">"
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">"
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>"
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Streamline Your Projects?
          </h2>"
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using our project management
            platform to deliver projects more efficiently.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button"
              size="lg""
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Free Trial"
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>"
            <Link href="/contact">
              <Button"
                size="lg""
                variant="outline""
                className="border-white text-white hove,
    r:bg-white hove,
    r:text-blue-600"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )}
"