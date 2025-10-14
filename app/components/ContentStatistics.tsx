import { TrendingUp, Users, Award, Zap } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface ContentStatisticsProps {
  stats?: StatItem[];
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  stats = [
    {
      value: "500+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,
      color: "text-blue-400",
    },
    {
      value: "99.9%",
      label: "Uptime",
      icon: <Zap className="w-8 h-8" />,
      color: "text-green-400",
    },
    {
      value: "50+",
      label: "Awards Won",
      icon: <Award className="w-8 h-8" />,
      color: "text-yellow-400",
    },
    {
      value: "40%",
      label: "Cost Savings",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-purple-400",
    },
  ],
  className = "",
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>ContentStatistics - Zion Tech Group</title>
        <meta name="description" content="Professional contentstatistics services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            ContentStatistics</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional contentstatistics solutions tailored to your business needs.</p>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions;
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge contentstatistics solutions.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation;
              </h3>
              <p className="text-green-700">
                Tailored contentstatistics implementations for your specific requirements.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support;
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your contentstatistics needs.</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today,
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
            ContentStatistics</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional contentstatistics solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge contentstatistics solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored contentstatistics implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your contentstatistics needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today</button></div></div></div></div>
)}
            </button>
          </div>
        </div>
      </div>
    </div>
)}
};
