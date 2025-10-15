
    }
  ];
  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },"
    { number: "15+", label: "Open Positions", icon: <Briefcase className="w-6 h-6" /> },"
    { number: "95%", label: "Employee Satisfaction", icon: <Star className="w-6 h-6" /> },"
    { number: "100%", label: "Remote Friendly", icon: <Globe className="w-6 h-6" /> }"
  ];
  const filteredJobs = selectedCategory === 'all'
    ? jobOpenings
    : jobOpenings.filter(job => job.category === selectedCategory);
  return (

                  </div>
                </div>
              ))}
            </div>
          </div>
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">"
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />"
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>"
              <p className="text-gray-300">Try selecting a different category or check back later for new openings.</p>"
            </div>
          )}
        </div>

