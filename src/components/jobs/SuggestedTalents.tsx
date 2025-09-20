import React from "react";
import { User, Star, MapPin } from "lucide-react";

export function SuggestedTalents() {
  const suggestedTalents = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "AI/ML Engineer",
      rating: 4.9,
      location: "San Francisco, CA",
      skills: ["Python", "TensorFlow", "Machine Learning"],
      avatar: "/images/avatars/sarah.jpg"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Full Stack Developer",
      rating: 4.8,
      location: "New York, NY",
      skills: ["React", "Node.js", "TypeScript"],
      avatar: "/images/avatars/michael.jpg"
    },
    {
      id: 3,
      name: "Lisa Park",
      title: "Data Scientist",
      rating: 4.9,
      location: "Seattle, WA",
      skills: ["R", "Python", "SQL"],
      avatar: "/images/avatars/lisa.jpg"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-white text-xl font-bold mb-2">Suggested Talent</h2>
        <p className="text-zion-slate-light">Top-rated professionals for your projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestedTalents.map((talent) => (
          <div key={talent.id} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light hover:border-zion-purple transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{talent.name}</h3>
                <p className="text-zion-cyan text-sm">{talent.title}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-3">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-white text-sm">{talent.rating}</span>
              <MapPin className="w-4 h-4 text-zion-slate-light ml-4 mr-1" />
              <span className="text-zion-slate-light text-sm">{talent.location}</span>
            </div>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {talent.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-zion-blue px-2 py-1 rounded text-zion-slate-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-zion-purple hover:bg-zion-purple-light text-white py-2 px-4 rounded-lg transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}