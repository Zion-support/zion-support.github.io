import React from 'react';
import { Link } from 'react-router-dom';
const MobileDevelopment: React.FC = () => {,
  const services = [,
    {
title: "iOS App Development","
      description: "Native iOS applications built with Swift and SwiftUI",",
      features: [
        "Swift & SwiftUI development","
        "Core Data integration","
        "Push notifications","
        "App Store optimization","
        "iOS 17+ compatibility""
      ],
      price: "$5,000 - $50,000","
      duration: "4-16 weeks""
    },
    {
      title: "Android App Development","
      description: "Native Android applications built with Kotlin and Jetpack Compose",",
      features: [
        "Kotlin & Jetpack Compose","
        "Room database","
        "Firebase integration","
        "Google Play optimization","
        "Material Design 3""
      ],
      price: "$4,500 - $45,000","
      duration: "4-14 weeks""
    },
    {
      title: "React Native Development","
      description: "Cross-platform mobile applications with React Native",",
      features: [
        "Cross-platform development","
        "Native module integration","
        "State management","
        "Performance optimization","
        "Code sharing between platforms""
      ],
      price: "$6,000 - $60,000","
      duration: "6-20 weeks""
    },
    {
      title: "Flutter Development","
      description: "Beautiful cross-platform apps with Flutter and Dart",",
      features: [
        "Single codebase for iOS & Android","
        "Custom UI components","
        "State management (Bloc/Riverpod)","
        "Platform channels","
        "Performance optimization""
      ],
      price: "$5,500 - $55,000","
      duration: "5-18 weeks""
    }
  ];,
  const platforms = [
    "iOS", "Android", "React Native", "Flutter", "Xamarin","
    "Ionic", "Cordova", "Progressive Web Apps", "Apple Watch", "Android Wear""
  ];,
  const features = [
    {
      title: "User Experience","
      description: "Intuitive and engaging user interfaces","
      icon: "🎨""
    },
    {
      title: "Performance","
      description: "Fast and responsive applications","
      icon: "⚡""
    },
    {
      title: "Security","
      description: "Secure data handling and authentication","
      icon: "🔒""
    },
    {
      title: "Scalability","
      description: "Apps that grow with your business","
      icon: "📈""
    },
    {
      title: "Maintenance","
      description: "Ongoing support and updates","
      icon: "🔧""
    },
    {
      title: "Analytics","
      description: "User behavior tracking and insights","
      icon: "📊""
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">"
      {/* Hero Section */}
<div className="bg-gradient-to-r from-pink-600 to-purple-600 py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
          <h1 className="text-5xl font-bold text-white mb-6">Mobile Development Services</h1>"
          <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">"
            Create stunning mobile applications that engage users and drive business growth.
            From native iOS and Android to cross-platform solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-pink-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get App Consultation
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold text-lg"" />,
              View Pricing
            </Link>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile Development Services</h2>"
            <p className="text-xl text-gray-600">Choose the right platform for your mobile app</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">"
                <div className="p-8">"
                  <div className="text-4xl mb-4">📱</div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-2 mb-6">"
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">"
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">"
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />"
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">"
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>"
                      <div className="text-sm text-gray-500">{service.duration}</div>"
                    </div>
                    <Link to="/contact""
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"" />,
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="py-20 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Mobile Development?</h2>"
            <p className="text-xl text-gray-600">We deliver exceptional mobile experiences</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">"
                <div className="text-4xl mb-4">{feature.icon}</div>"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>"
                <p className="text-gray-600">{feature.description}</p>"
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Platforms Section */}
      <div className="py-20 bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile Platforms & Technologies</h2>"
            <p className="text-xl text-gray-600">We work with all major mobile platforms</p>"
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">"
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:bg-gray-50 transition-colors shadow-sm">"
                <span className="text-gray-700 font-medium">{platform}</span>"
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Process Section */}
      <div className="py-20 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile App Development Process</h2>"
            <p className="text-xl text-gray-600">Our proven methodology for mobile app success</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-pink-600">1</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>"
              <p className="text-gray-600">Understand your requirements and target audience</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-purple-600">2</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>"
              <p className="text-gray-600">Create wireframes, prototypes, and UI/UX design</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-indigo-600">3</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>"
              <p className="text-gray-600">Build and test your mobile application</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-blue-600">4</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch</h3>"
              <p className="text-gray-600">Deploy to app stores and provide ongoing support</p>"
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">"
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Mobile App?</h2>"
          <p className="text-xl text-pink-100 mb-8">"
            Get a free consultation and discover how we can bring your mobile app idea to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-pink-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get Free Consultation
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold text-lg"" />,
              View Mobile Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;
