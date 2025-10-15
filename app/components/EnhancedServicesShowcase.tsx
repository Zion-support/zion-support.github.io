
const EnhancedServicesShowcase: React.FC = () => {};
}const services  = []
    {}, icon: title: "AI Solutions",";
      description: "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",";
      features: []
        "Machine Learning","Natural Language Processing","Computer Vision"Predictive Analytics"]}";
    {},
      icon: title: "Cybersecurity",";
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",";
      features: []
        "Security Audits","Threat Detection","Data Protection"Compliance Management"]}";
    {},
      icon: title: "Cloud Infrastructure",";
      description: "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.",";
      features: []
        "Cloud Migration","Infrastructure as Code","Auto-scaling","Disaster Recovery"]},";
    {}
      icon: Globe,
      title: "Digital Transformation",";
      description:
        "Complete digital transformation services to modernize your business and stay competitive.",";
      features: []
        "Strategy Development","Technology Integration","Change Management","Training & Support",";
  CheckCircle, ArrowRight, }; from \"lucide-react\";
import { Link } from "react-router-dom";
const EnhancedServicesShowcase: React.FC = () => {

    {

            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

                  {service.description}
                </p>
              </div>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to ={service.href}

              >

                Learn More

              </Link>
            </div>
          ))}
        </div>

          </>
        </div>
      </div>    </div>;  );";";
};";";";
export default EnhancedServicesShowcase;"

