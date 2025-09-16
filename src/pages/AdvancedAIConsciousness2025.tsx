            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIConsciousness2025;