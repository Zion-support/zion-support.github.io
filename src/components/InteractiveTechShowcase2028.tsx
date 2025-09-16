import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
      ],
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      ],
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
              </div>
              <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Try Interactive Demo →
              </button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;