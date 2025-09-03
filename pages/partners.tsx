import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the foundation for our solutions',
      partners: [
        {
          name: 'Microsoft',

    }
  ];

  return (

            </div>
          </div>
        </section>
      ))}

          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PartnersPage;