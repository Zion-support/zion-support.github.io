import { useState    } from "react;";

import { Helmet   } from ";react-helmet-async";lucide-react;"

interface JobPosition {
  // Add properties here;
}
  id: number;

import { Right, Circle,    } from "lucide-react";"

const PagePage: React.FC = () => {}
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];,
  benefits: string[];
}
const eersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all);'

  const [selectedLocation, setSelectedLocation] = useState('all);'
      title: 'Senior AI Engineer,''
      department: 'Engineering,''
      location: 'Remote,''
      type: 'Full-time,''
      experience: '5+ years,''
      posted: '2 days ago,''
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.,''
      requirements: [
        'Master\'s degree in Computer Science or related field,''
        '5+ years experience in AI/ML development,''
        'Expertise in Python, TensorFlow, PyTorch,''
        'Experience with cloud platforms (AWS, Azure, GCP),''
        'Strong problem-solving and communication skills''
      ],
      benefits: [
        'Competitive salary and equity,''
        'Comprehensive health insurance,''
        'Flexible work arrangements,''
        'Professional development budget,''
        '401k with company matching''
      title: 'Quantum Computing Researcher,''
      department: 'Research,''
      location: 'San Francisco, CA,''
      type: 'Full-time,''
      experience: '3+ years,''
      posted: '1 week ago,''
      description: 'Research and develop quantum algorithms and applications for real-world business problems.,''
      requirements: [
        'PhD in Physics, Computer Science, or related field,''
        '3+ years quantum computing research experience,''
        'Knowledge of quantum algorithms and programming,''
        'Experience with quantum simulators and hardware,''
        'Strong publication record''
      ],
      benefits: [
        'Research autonomy and resources,''
        'Conference and publication support,''
        'Collaboration with top researchers,''
        'Competitive salary and benefits,''
        'State-of-the-art facilities''

const eersPage: React.FC = () => {
  return (
<>    <div className="min-h-screen pt-20">""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">""
        <div className="text-center">""
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
            <span className="text-cyan-400">eers</span>""
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
            Join our team and help shape the future of AI and IT solutions.
          </p>
        </div>
      </div>
    </div>
  )};
};
import { Right, Circle, Star,    } from "lucide-react";"
    },
    {}
      id: 3,
      title: 'DevOps Engineer,''
      department: 'Engineering,''
      location: 'New York, NY,''
      type: 'Full-time,''
      experience: '3+ years,''
      posted: '3 days ago,''
      description: 'Build and maintain scalable infrastructure for our AI and cloud services.,''
      requirements: [
        'Bachelor\'s degree in Computer Science or related field,''
        '3+ years DevOps experience,''
        'Expertise in Kubernetes, Docker, CI/CD,''
        'Experience with cloud platforms,''
        'Knowledge of monitoring and logging tools''
      ],
      benefits: [
        'Competitive salary,''
        'Health and dental insurance,''
        'Flexible PTO,''
        'Learning and development opportunities,''
        'Team building events''
      title: 'AI Product Manager,''
      department: 'Product,''
      location: 'Remote,''
      type: 'Full-time,''
      experience: '4+ years,''
      posted: '5 days ago,''
      description: 'Drive product strategy and roadmap for our AI-powered solutions.,''
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field,''
        '4+ years product management experience,''
        'Experience with AI/ML products,''
        'Strong analytical and communication skills,''
        'Experience with agile development''
      ],
      benefits: [
        'Competitive salary and equity,''
        'Comprehensive benefits package,''
        'Remote work flexibility,''
        'Professional development opportunities,''
        'Stock options''
      title: 'Cybersecurity Specialist,''
      department: 'location: 'Austin, TX,''
      type: 'Full-time,''
      experience: '4+ years,''
      posted: '1 week ago,''
      description: 'Protect our systems and data with advanced cybersecurity measures and AI-powered threat detection.,''
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field,''
        '4+ years cybersecurity experience,''
        'Certifications (CISSP, CISM, etc.),''
        'Experience with security tools and frameworks,''
        'Knowledge of AI security best practices''
      ],
      benefits: [
        'Competitive salary,''
        'Health and wellness benefits,''
        'Professional certification support,''
        'Flexible work schedule,''
        'conference attendance''
      title: 'Data Scientist,''
      department: 'Data,''
      location: 'Seattle, WA,''
      type: 'Full-time,''
      experience: '3+ years,''
      posted: '2 weeks ago,''
      description: 'Extract insights from complex data sets to drive business decisions and improve AI models.,''
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field,''
        '3+ years data science experience,''
        'Expertise in Python, R, SQL,''
        'Experience with machine learning,''
        'Strong statistical analysis skills''
      ],
      benefits: [
        'Competitive salary and equity,''
        'Comprehensive health insurance,''
        'Data science conference attendance,''
        'Access to cutting-edge tools,''
        'Collaborative team environment''
  const filteredPositions = positions.filter(position => {;
    const matchesDepartment = selectedDepartment === 'all || position.department === selectedDepartment;'

    const matchesLocation = selectedLocation === 'all || position.location === selectedLocation;'

  const featuredPositions = filteredPositions.filter(position => position.featured);

  const regularPositions = filteredPositions.filter(position => !position.featured);

      id: '1,''
      title: 'Senior AI Engineer,''
      department: 'AI Solutions',      location: 'Remote,''
      type: 'Full-time,''
      experience: '5+ years,''
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.,''
      requirements: [
        '5+ years experience in AI/ML development,''
        'Expertise in Python, TensorFlow, PyTorch,''
        'Experience with cloud platforms (AWS, Azure, GCP),''
        'Strong understanding of deep learning algorithms,''
        Previous experience in production AI systems;
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000,''
        'Equity participation,''
        'Flexible remote work,''
        Professional development budget;
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',''
      requirements: []
        '5+ years experience in AI/ML development',''
        'Expertise in Python, TensorFlow, PyTorch',''
        'Experience with cloud platforms (AWS, Azure, GCP)',''
        'Strong understanding of deep learning algorithms',''
        'Previous experience in production AI systems'''
      ],
      benefits: []
        'Competitive salary: $120,000 - $180,000',''
        'Equity participation',''
        'Flexible remote work',''
        'Professional development budget'''
      ],
      posted: '2 days ago,''
      featured: true});

},
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']});)''
}

    'eer growth opportunities'''
  const values = [;

    {
  const culture = [;

    {
      stat: '98%,''
      label: 'Employee Satisfaction,''
      description: 'Our team loves working here});)''
},
    {
      stat: '50+,''
      label: 'Team Members,''
      description: 'Growing team of experts});)''
},
    {
      stat: '15+,''
      label: 'Countries,''
      description: 'Global remote team});)''
},
    {
      stat: '4.9/5,''
      label: 'Glassdoor Rating,''
      description: 'Highly rated workplace});)''
        <title>eers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, and emerging technologies. Explore open positions and start your career with us. />""
        <meta name="keywords" content="careers, jobs, AI engineer, quantum computing, tech jobs, remote work, engineering positions />""
        <meta property="og:title" content="eers - Zion Tech Group />""
        <meta property="og:description" content="Join our team and work on the future of technology />""
        <meta property="og:type" content="website />""
        <meta property="og:url" content="https://ziontechgroup.com/careers />""
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>""
        {/* Hero Section */}

        <section className="pt-24 pb-16 px-4">          <div className="max-w-7xl mx-auto text-center>""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>""
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent>""
                Page;
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>""
              Build the future of technology with us. Were looking for passionate individuals to join our mission of advancing AI and emerging technologies.
            </p>
          </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8>""
              <select;
                value={selectedDepartment}

                onChange={(e) => setSelectedDepartment(e.target.value)}

                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors""
              >
                {departments.map((dept) => (
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">""
              Work on cutting-edge AI and IT solutions that transform businesses worldwide.

              Be part of a team that's shaping the future of AI and IT solutions. We're looking for passionate individuals who want to make a difference.'

Be part of a team that's shaping the future of AI and IT solutions. We're looking for passionate individuals who want to make a difference.'
Be part of a team that's shaping the future of AI and IT solutions. We're looking for passionate individuals who want to make a difference.''
          {/* Why Work With Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">""
            <div></div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>""
              <div className="space-y-6">""
                <div className="flex items-start space-x-4">""
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">""
                    <Star className="w-6 h-6 text-white" />""
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Technology</h3>""
                    <p className="text-gray-300">""
                      Work with the latest AI, quantum computing, and cloud technologies ;
                      that are shaping the future.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

                  <option key={dept.id} value={dept.id} className="bg-slate-800>""
                {locations.map((loc) => (

                  <option key={loc.id} value={loc.id} className="bg-slate-800>""
        </section>
  return (
  <>
    <div></div>
<>        <title>eers - Zion Tech Group | Join Our Team<
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture. ""
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, DevOps, remote work, tech jobs ""
      <
        <section className="py-20 px-4">""
        </section>
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"""
                >
                  <div className="flex items-start justify-between mb-4">""
                    <div></div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>""
        <section className="relative py-20 px-4 overflow-hidden>"
  </>
);}""
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse ""
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s }}'"'"

          <div className="relative max-w-7xl mx-auto text-center>""
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6>""
              Join Our Team;
            <
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto>""
              Work on cutting-edge AI and IT solutions that transform businesses worldwide.
            <
          <
        <

        {/* Featured Positions */}

        {featuredPositions.length > 0 && (

          <section className="py-16 px-4>""
            <div className="max-w-7xl mx-auto>""
              <h2 className="text-3xl font-bold text-white mb-12 text-center>Featured Positions</h2>""
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8>""
                {featuredPositions.map((position) => (

                  <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:border-cyan-400/50 transition-all duration-300 group>""
                    <div className="flex items-start justify-between mb-6>""
              {values.map((value, index) => (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">""
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">""
                  <div className="flex justify-center mb-4">""
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">""
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">""
                    {benefit.description}
                  </p>
        </div>
      </div>
    </>
  );
};

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">""
            <h2 className="text-4xl font-bold text-white mb-4">""
              Don't See Your Role?''
        </section>
      )}

        {/* All Positions */}

        <section className="py-16 px-4>""
          <div className="max-w-7xl mx-auto>""
            <h2 className="text-3xl font-bold text-white mb-12 text-center>All Open Positions</h2>""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6>""
              {regularPositions.map((position) => (
            {regularPositions.length === 0 && (

              <div className="text-center py-16>""
                <div className="text-6xl mb-4>🔍</div>""
                <h3 className="text-2xl font-bold text-white mb-4>No positions found</h3>""
                <p className="text-gray-300 mb-8>Try adjusting your filters or check back later for new opportunities</p>""
                <button;
                  onClick={() => {
                    setSelectedDepartment('all);'

                    setSelectedLocation('all);'

                  className={bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20''
                  } hover:border-purple-400 transition-all duration-300 group}

                >                <div></div>
                  {position.featured && (

                  <p className="text-gray-300 mb-6>{position.description}</p>""
                      {position.requirements.length > 3 && (

                        <li className="text-sm text-gray-400>""
            </div>  ));)
export default eersPage;

}