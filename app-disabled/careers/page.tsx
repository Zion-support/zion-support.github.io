
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const CareersPage: React.FC = () => {

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our engineering team to build cutting-edge AI solutions.',
      requirements: ['5+ years experience', 'React/TypeScript', 'AI/ML knowledge'],
      benefits: ['Health insurance', 'Remote work', 'Learning budget']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help shape the future of AI and technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Help us build the future of AI and technology
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobPositions.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{job.location}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{job.type}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button
                  onClick={() => handleJobSelect(job)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;