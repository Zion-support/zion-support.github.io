import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Technology Solutions',
      links: [
        { name: 'AI Revolution', path: '/pages/AIRevolutionaryBreakthrough2026' },
        { name: 'Quantum Computing', path: '/pages/QuantumComputingRevolution2026' },
        { name: 'Neural Interfaces', path: '/pages/NeuralInterfaceRevolution2026' },
        { name: 'Biotech Revolution', path: '/pages/AdvancedBiotechRevolution2026' },
        { name: 'Space Technology', path: '/pages/SpaceTechInnovation2026' },
        { name: 'Advanced Robotics', path: '/pages/AdvancedRobotics2026' }
      ]
    },
    {
      title: 'Resources',
      links: [
      ]
    },
    {
      title: 'Company',
      links: [
      ]
    }
  ];

                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;