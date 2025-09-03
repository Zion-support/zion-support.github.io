import Head from "next/head";
import React, { useState } from "react";
const Head = dynamic(() => import("next/head"), { ssr: false })}
  Code,;
  Cloud} from "lucide-react";

export default function Dashboard() {";
  const [activeTab, setActiveTab] = useState("overview")}
  const stats = [];

  const recentProjects = []},;
    {
      id: 2,";
      name: "Cloud Migration",";
      status: "Planning",;
      progress: 25,";
      dueDate: "2024-03-01",";
      team: ["Sarah Wilson", "David Brown"]},;
    {
      id: 3,";
      name: "Mobile App Development",";
      status: "Completed",;
      progress: 100,";
      dueDate: "2024-01-30",";
      team: ["Alex Chen", "Lisa Garcia"];


  ];

  const notifications = [];

  const quickActions = [];

  const services = [];

  return (;
    <>;
<Head>;
        <title>Dashboard - Zion Tech Group</title>;
        <meta name = "description" content="Your personal dashboard for managing projects, team, and resources."  />;
      </Head>;
";
      <div className="min-h-screen bg-gray-50">;
        {/* comment */}";
        <header className="bg-white shadow-sm border-b border-gray-200">";
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
            <div className="flex justify-between items-center h-16">";
              <div className="flex items-center">";
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>;
              </div>;
              ";
              <div className="flex items-center space-x-4">";
                <button className="p-2 text-gray-400 hover:text-gray-600 relative">";
                  <Bell className="w-6 h-6"  />";
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>;
                </button>;
                ";
                <div className="flex items-center space-x-3">";
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">";
                    <User className="w-5 h-5 text-white"  />;
                  </div>";
                  <span className="text-sm font-medium text-gray-700">John Doe</span>;
                </div>;
                ";
                <button className="p-2 text-gray-400 hover:text-gray-600">";
                  <Settings className="w-6 h-6"  />;
                </button>;
              </div>;
        </header>;
";
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">,;
          {/* comment */}";
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6 mb-8">,;
            {stats.map((stat, index) => (;
              <motion.div,";
key="{index}
                initial="{{" opacity: 0, y: 20 }}";
                animate="{{" opacity: 1, y: 0 }}";
                transition="{{" delay: index * 0.1 }}";
                className="bg-white rounded-xl shadow-sm p-6">";
                <div className="flex items-center justify-between">;
                  <div>";
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>";
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>";
                    <p className="{"text-sm" text-green-600">{stat.change}</p>;
                  </div>";
                  <div className="{"w-12" h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center"}>";
                    <stat.icon className=""w-6" h-6 text-white"} />;
                  </div>;
              </motion.div>;
            ))}

          </div>;
";
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,;
            {/* comment */}";
            <div className="lg: col-span-2 space-y-8">,;
              {/* comment */}

              <motion.div,";
initial="{{" opacity: 0, y: 20 }}";
                animate="{{" opacity: 1, y: 0 }}";
                className="bg-white rounded-xl shadow-sm p-6">";
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>";
                <div className="grid grid-cols-1 md: grid-cols-2 gap-4">,;
                  {quickActions.map((action, index) => (";
                    <a key="{index}
                      href="{action.href}
                      className="{"flex" items-center p-4 border border-gray-200 rounded-lg hover: border-gray-300 transition-colors">",;
                      <div className="{"w-10" h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mr-4"}>";
                        <action.icon className=""w-5" h-5 text-white"} />;
                      </div>;
                      <div>";
                        <h3 className="font-medium text-gray-900">{action.title}</h3>";
                        <p className="text-sm text-gray-600">{action.description}</p>;
                      </div>;
                    </a>;
                  ))}

                </div>;
              </motion.div>;

              {/* comment */}

              <motion.div,";
initial="{{" opacity: 0, y: 20 }}";
                animate="{{" opacity: 1, y: 0 }}";
                transition="{{" delay: 0.2 }}";
                className="bg-white rounded-xl shadow-sm p-6">";
                <div className="flex items-center justify-between mb-4">";
                  <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>";
                  <a href="/projects" className="text-blue-600 hover: text-blue-500 text-sm font-medium">;
                    View all,;
                  </a>;
                </div>;
                ";
                <div className="space-y-4">;
                  {recentProjects.map((project) => (",;
                    <div key="{project.id}" className="border border-gray-200 rounded-lg p-4">";
                      <div className="flex items-center justify-between mb-2">";
                        <h3 className="{"font-medium" text-gray-900">{project.name}</h3>";
                        <span className="{"px-2" py-1 text-xs font-medium rounded-full ${";
                          project.status === "Completed" ? "bg-green-100 text-green-800" :";
                          project.status === "In Progress" ? "bg-blue-100 text-blue-800" :;
                          "bg-yellow-100 text-yellow-800>}"}>;
                          {project.status}

                        </span>;
                      </div>;
                      ";
                      <div className = ""mb-3"}">";
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">;
                          <span>Progress</span>;
                          <span>{project.progress}%</span>;
                        </div>";
                        <div className="w-full bg-gray-200 rounded-full h-2">";
                          <div className="{"bg-blue-600" h-2 rounded-full transition-all duration-300;
                            style="{{" width: "${project.progress}%" }}

                          ></div>;
                        </div>;
                      ";
                      <div className=""flex" items-center justify-between text-sm text-gray-600"}>;
                        <span>Due: {project.dueDate}</span>;
                        <span>{project.team.length} team members</span>;
                      </div>;
                  ))}

                </div>;
              </motion.div>;

              {/* comment */}

              <motion.div,";
initial="{{" opacity: 0, y: 20 }}";
                animate="{{" opacity: 1, y: 0 }}";
                transition="{{" delay: 0.4 }}";
                className="bg-white rounded-xl shadow-sm p-6">";
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h2>";
                <div className="grid grid-cols-1 md: grid-cols-3 gap-4">,;
                  {services.map((service, index) => (";
                    <a key="{index}
                      href="{service.href}
                      className="{"flex" flex-col items-center p-4 border border-gray-200 rounded-lg hover: border-gray-300 transition-colors text-center">",;
                      <div className="{"w-12" h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-3"}>";
                        <service.icon className=""w-6" h-6 text-white"} />;
                      </div>";
                      <h3 className="font-medium text-gray-900 mb-1">{service.title}</h3>";
                      <p className="text-sm text-gray-600">{service.description}</p>;
                    </a>;
                  ))}

                </div>;
              </motion.div>;
            </div>;
            {/* comment */}";
            <div className="space-y-8">;
              {/* comment */}

              <motion.div,";
initial="{{" opacity: 0, x: 20 }}";
                animate="{{" opacity: 1, x: 0 }}";
                transition="{{" delay: 0.1 }}";
                className="bg-white rounded-xl shadow-sm p-6">";
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h2>";
                <div className="space-y-3">;
                  {notifications.map((notification) => (";
                    <div key="{notification.id}" className="{"flex" items-start space-x-3">";
                      <div className="{"w-2" h-2 rounded-full mt-2 ${";
                        notification.type === "success" ? "bg-green-500" :";
                        notification.type === "warning" ? "bg-yellow-500" :;
                        'bg-blue-500>}"}></div>";
                      <div className = ""flex-1"}">";
                        <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>";
                        <p className="text-sm text-gray-600">{notification.message}</p>";
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>;
                      </div>;
                  ))}

                </div>";
                <a href="/notifications" className="block text-center text-blue-600 hover: text-blue-500 text-sm font-medium mt-4">;
                  View all notifications,;
                </a>;
              </motion.div>;
,;
              {/* comment */}

              <motion.div,";
initial="{{" opacity: 0, x: 20 }}";
                animate="{{" opacity: 1, x: 0 }}";
                transition="{{" delay: 0.2 }}";
                className="bg-white rounded-xl shadow-sm p-6">";
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>";
                <div className="space-y-3">";
                  <div className="flex items-center space-x-3">";
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">";
                      <Calendar className="w-4 h-4 text-blue-600"  />;
                    </div>;
                    <div>";
                      <h4 className="text-sm font-medium text-gray-900">Team Meeting</h4>";
                      <p className="text-xs text-gray-600">Today, 2: 00 PM</p>;
                    </div>;
                  ";
                  <div className="flex items-center space-x-3">";
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">";
                      <Calendar className="w-4 h-4 text-green-600"  />;
                    </div>;
                    <div>";
                      <h4 className="text-sm font-medium text-gray-900">Project Review</h4>",;
                      <p className="text-xs text-gray-600">Tomorrow, 10: 00 AM</p>;
                    </div>;
                  ";
                  <div className="flex items-center space-x-3">";
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">";
                      <Calendar className="w-4 h-4 text-purple-600"  />;
                    </div>;
                    <div>";
                      <h4 className="text-sm font-medium text-gray-900">Client Presentation</h4>",;
                      <p className="text-xs text-gray-600">Friday, 3: 00 PM</p>;
                    </div>;
                </div>";
                <a href="/calendar" className="block text-center text-blue-600 hover:text-blue-500 text-sm font-medium mt-4">;
                  View calendar,;
                </a>;
              </motion.div>;
            </div>;
    </>",;
  )}