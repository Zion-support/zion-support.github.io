import { ArrowRight, Calendar, Users, BarChart3, CheckCircle, Clock, Target, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ProjectManagementToolPage() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Task Management",
      description: "Organize and track tasks with intuitive kanban boards and Gantt charts.",
      benefits: ["Visual task tracking", "Deadline management", "Priority setting", "Progress monitoring"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Foster seamless collaboration with real-time updates and communication tools.",
      benefits: ["Real-time updates", "Team messaging", "File sharing", "Comment threads"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Gain insights with comprehensive reports and performance analytics.",
      benefits: ["Performance metrics", "Time tracking", "Resource utilization", "Custom reports"]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Tracking",
      description: "Monitor time spent on tasks and projects for accurate billing and analysis.",
      benefits: ["Automatic time tracking", "Manual time entry", "Billable hours", "Time reports"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal Setting",
      description: "Set and track project goals with milestone management and progress indicators.",
      benefits: ["Milestone tracking", "Goal alignment", "Progress indicators", "Achievement badges"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation",
      description: "Automate repetitive tasks and workflows to boost productivity.",
      benefits: ["Workflow automation", "Task templates", "Auto-assignments", "Notification rules"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Project Management Tool - Zion Tech Group | Task Management & Team Collaboration</title>
        <meta name="description" content="Powerful project management tool with task tracking, team collaboration, time management, and analytics. Streamline your projects and boost productivity." />
        <meta name="keywords" content="project management, task management, team collaboration, time tracking, project planning, productivity tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Project Management Tool
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your projects with our comprehensive project management solution. 
                Track tasks, collaborate with teams, and achieve your goals efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/micro-saas"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View All Tools
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to manage projects effectively and keep your team aligned.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Project Management Tool?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Built for modern teams who need efficiency, collaboration, and results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "30% Faster", description: "Complete projects 30% faster with streamlined workflows" },
                { title: "95% Accuracy", description: "Reduce errors with automated tracking and validation" },
                { title: "24/7 Access", description: "Access your projects anytime, anywhere, on any device" },
                { title: "Unlimited", description: "Unlimited projects, tasks, and team members" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.title}</div>
                  <p className="text-gray-300">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Start managing your projects more effectively today. Get started with our project management tool.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}