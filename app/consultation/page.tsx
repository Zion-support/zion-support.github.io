import { useState } from "react";

export default function Consultation() {}
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({)}
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    projectSize: '',
    timeline: '',
    message: '',
    consultationType: '')
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const { name, value } = e.target;
    setFormData(prev => ({)}
      ...prev,
      [name]: value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {}
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };


    {}
      title: "Expert Guidance",
      description: "Get insights from certified technology professionals with years of experience.",
      icon: <CheckCircle className="w-8 h-8 text-cyan-400" />
    },
    {}
      title: "No Obligation",
      description: "Completely free consultation with no strings attached or hidden costs.",
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {}
      title: "Actionable Insights",
      description: "Receive practical recommendations you can implement immediately.",
      icon: <ArrowRight className="w-8 h-8 text-green-400" />
    },
    {}
      title: "Customized Solutions",
      description: "Tailored advice based on your specific business needs and challenges.",
      icon: <Globe className="w-8 h-8 text-blue-400" />
    }
  ];




  return ()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Free Consultation
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get expert advice on your technology needs
          </p>
        </div>
      </div>
    </div>)
  );
}