import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Right, Play, User, Star, Circle, Clock } from 'lucide-react'
const TutorialsPage: React.FC = () => {
  const tutorials = [{
      id: 1,
      title: "Getting Started with AI Development","
      description: "Learn the fundamentals of AI development and machine learning concepts.","
      duration: "2 hours","
      level: "Beginner","
      instructor: "Dr. Sarah Johnson","
      rating: "4.8",
      students: 1250,
      thumbnail: "🤖"},"
    {
      id: 2,
      title: "Infrastructure Setup","
      description: "Complete guide to setting up cloud infrastructure on AWS and Azure.","
      duration: "3 hours","
      level: "Intermediate","
      instructor: "Michael Chen","
      rating: "4.9",
      students: 980,
      thumbnail: "☁️"},"
    {
      id: 3,
      title: "Cybersecurity Fundamentals","
      description: "Essential cybersecurity practices and threat protection strategies.","
      duration: "4 hours","
      level: "Beginner","
      instructor: "Emily Rodriguez","
      rating: "4.7",
      students: 210o0,
      thumbnail: "🔒"},"
    {
      id: 4,
      title: "Advanced Machine Learning","
      description: "Deep dive into advanced ML algorithms and neural networks.","
      duration: "6 hours","
      level: "Advanced","
      instructor: "Dr. David Kim","
      rating: "4.9",
      students: 750,
      thumbnail: "🧠"},"
    {
      id: 5,
      title: "DevOps Best Practices","
      description: "Learn modern DevOps practices and CI/CD pipeline implementation.","
      duration: "5 hours","
      level: "Intermediate","
      instructor: "Lisa Wang","
      rating: "4.8",
      students: 110o0,
      thumbnail: "⚙️"},"
    {
      id: 6,
      title: "Data Analytics with Python","
      description: "Master data analysis and visualization using Python and popular libraries.","
      duration: "4 hours","
      level: "Intermediate","
      instructor: "James Wilson","
      rating: "4.6",
      students: 1650,
      thumbnail: "📊"}"
  ]
  const categories = [{ name: "All", count: "24"},"
    { name: "AI & ML", count: "8"},"
    { name: "Computing", count: "6"},"
    { name: "Cybersecurity", count: "4"},"
    { name: "DevOps", count: "3"},"
    { name: "Data Science", count: "3"}"
  ]
  return (
    <>
      <Helmet>
        <title>Tutorials - Learn AI & IT Skills | Zion Tech Group</title>
        <meta name="description" content="Master AI and IT skills with our comprehensive tutorials. Learn from experts with hands-on projects and real-world examples." />
        <meta name="keywords" content="tutorials, AI learning, IT training, machine learning, cloud computing, cybersecurity, online courses" />
      </Helmet>;
      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">;
        {/* Hero Section */};
        <section className="relative py-20 px-4">;
          <div className="max-w-7xl mx-auto text-center">;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              Learn;
              <span className="block bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">
                Tutorials;
              </span>
            </h1>
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
              Master AI and IT skills with our comprehensive tutorials.;
              Learn from experts with hands-on projects and real-world examples.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-xl font-semibold hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hove,r:scale-10o5 shadow-lg shadow-cyan-50o0"/25">
                <Play className="w-5 h-5 mr-2 inline" />
                Start Learning;
              </button>
              <button className="px-8 py-4 border border-cyan-50o0"/30 text-cyan-40o0 rounded-xl font-semibold hover:bg-cyan-50o0"/10 transition-all duration-30o0">
                Browse All;
              </button>
            </div>
          </div>
        </section>
        {/* Categories */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, _index) => (
                <button;}
                  key={_index}
                  className="$1"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Tutorials Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Featured Tutorials;
            </h2>
            <div className="grid md: grid-cols-2 l,g:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50 hover:border-cyan-50o0"/50 transition-all duration-30o0 group">
                  <div className="text-4xl mb-4">{tutorial.thumbnail}</div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-50o0"/20 text-cyan-40o0 rounded-full text-sm font-medium">
                      {tutorial.level}
                    </span>
                    <div className="flex items-center text-yellow-40o0">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{tutorial.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-40o0 transition-colors">
                    {tutorial.title}
      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">{/* Hero Section */}"
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Learn
              <span className="block bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">
                Tutorials</span></h1>
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
              Master AI and IT skills with our comprehensive tutorials.
              Learn from experts with hands-on projects and real-world examples.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-xl font-semibold hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hove,r:scale-10o5 shadow-lg shadow-cyan-50o0"/25">
                <Play className="w-5 h-5 mr-2 inline" />
                Start Learning</button>
              <button className="px-8 py-4 border border-cyan-50o0"/30 text-cyan-40o0 rounded-xl font-semibold hover:bg-cyan-50o0"/10 transition-all duration-30o0">
                Browse All</button></div></div></section>{/* Categories */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">{categories.map((category, _index) => ("
                <button
                  key={_index}
                  className="px-6 py-3 bg-slate-80o0/50 backdrop-blur-sm rounded-xl border border-slate-70o0"/50 text-white hover: border-cyan-50o0"/50 hove,r:bg-slate-70o0"/50 transition-all duration-30o0">{category.name} ({category.count})"
                </button>
              ))}
            </div></div></section>{/* Tutorials Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Featured Tutorials</h2>
            <div className="grid md: grid-cols-2 l,g:grid-cols-3 gap-8">{tutorials.map((tutorial) => ("
                <div key={tutorial.id} className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50 hover:border-cyan-50o0"/50 transition-all duration-30o0 group">
                  <div className="text-4xl mb-4">{tutorial.thumbnail}</div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-50o0"/20 text-cyan-40o0 rounded-full text-sm font-medium">{tutorial.level}"
                    </span>
                    <div className="flex items-center text-yellow-40o0">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{tutorial.rating}</span></div></div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-40o0 transition-colors">{tutorial.title}"
                  </h3>
                  <p className="text-gray-30o0 mb-4 text-sm">{tutorial.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-40o0 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {tutorial.students} students;
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-40o0 text-sm font-medium">{tutorial.instructor}</span>
                    <button className="flex items-center text-cyan-40o0 hover:text-cyan-30o0 transition-colors">
                      Start Tutorial;
                      <Right className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-80o0"/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?;
            </h2>
            <p className="text-xl text-gray-30o0 mb-8">
              Join thousands of students already learning with our comprehensive tutorials.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-xl font-semibold hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hove,r:scale-10o5 shadow-lg shadow-cyan-50o0"/25">
                Get Started Free;
                <Right className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-50o0"/30 text-cyan-40o0 rounded-xl font-semibold hover:bg-cyan-50o0"/10 transition-all duration-30o0">
                View All Tutorials;
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default TutorialsPage;
};

export default TutorialsPage;''
