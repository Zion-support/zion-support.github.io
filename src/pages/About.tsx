import {
  ArrowRight,
  Award
  CheckCircle,
  Globe
  Lightbulb
  Shield
  Target
  Users
  Zap
} from 'lucide-react';
import React from 'react';

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

constAbout: React.FC = () => {
  constvalues = [
    {
      icon: Lightbulb
      title: 'Innovation'
      description: 'Westayat theforefrontof technologyconstantlyexploringnew solutionsandmethodologies.'
    }
    {
      icon: Shield
      title: 'Trust & Security'
      description: 'Yourdataand projectsareprotected withenterprise-gradesecuritymeasures andbestpractices.'
    }
    {
      icon: Users
      title: 'Collaboration'
      description: 'Weworkclosely withourclients aspartnersensuringalignmentwith yourbusinessgoals.'
    }
    {
      icon: Target
      title: 'Excellence'
      description: 'Wedeliverhigh-qualitysolutionsthat exceedexpectationsand drivemeasurableresults.'
    }
  ]; constteam = [
    {
      name: 'SarahJohnson'
      role: 'CEO & Founder'
      expertise: 'AIStrategy & BusinessDevelopment'
      experience: '15+ yearsinAI andtechnologyleadership'
    }
    {
      name: 'MichaelChen'
      role: 'CTO'
      expertise: 'TechnicalArchitecture & Innovation'
      experience: '12+ yearsinsoftware engineeringandcloud technologies'
    }
    {
      name: 'EmilyRodriguez'
      role: 'HeadofAI Solutions'
      expertise: 'MachineLearning & DataScience'
      experience: '10+ yearsinAI researchandimplementation'
    }
    {
      name: 'DavidThompson'
      role: 'LeadDevOpsEngineer'
      expertise: 'CloudInfrastructure & Automation'
      experience: '8+ yearsinDevOps andinfrastructuremanagement'
    }
  ]; constachievements = [
    {
      icon: Award
      title: 'IndustryRecognition'
      description: 'Awarded "BestAISolutions Provider" byTechInnovation Awards2024'
    }
    {
      icon: Users
      title: 'ClientSuccess'
      description: '500+ successfulprojectsdelivered acrossvariousindustries'
    }
    {
      icon: Globe
      title: 'GlobalReach'
      description: 'Servingclientsin 25+ countriesworldwide'
    }
    {
      icon: Zap
      title: 'InnovationLeader'
      description: 'Firsttomarket withseveralbreakthrough AIsolutions'
    }
  ]; return (
    <>
      <Helmet>
        <title>
          AboutUs - ZionTechGroup | LeadingAI & TechnologySolutions
        </title>
        <metaname = 'description'
          content="LearnaboutZion TechGroup'smissionto transformbusinessesthrough cutting-edgeAIand technologysolutions. Meetourexpert teamanddiscover ourvalues."
        />
        <meta name='keywords'
          content='aboutusAIcompanytechnologyteammissionvaluesleadershipinnovation'
        />
      </Helmet>

      <divclassName = 'min-h-screenbg-gradient-to-brfrom-blue-50via-whiteto-teal-50'>
        {/* HeaderSection */}
        <sectionclassName='bg-gradient-to-rfrom-blue-600to-purple-600py-20'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8text-center'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
            >
              <h1className = 'text-4xlmd: text-5xlfont-boldtext-whitemb-6'>
                AboutZionTech Group
              </h1>
              <pclassName='text-xltext-blue-100max-w-3xlmx-auto'>
                We'reateam ofpassionatetechnologists dedicatedtotransforming businessesthroughinnovative AIandtechnology
                solutionsthatdrive realresults.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MissionSection */}
        <sectionclassName = 'py-20'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <divclassName='gridgrid-cols-1lg:grid-cols-2gap-12items-center'>
              <motion.divinitial={{ opacity: 0x: -20 }}
                animate = {{ opacity:  1x:  0 }}
                transition = {{ duration: 0.6 }}
              >
                <h2className = 'text-3xlmd: text-4xlfont-boldtext-gray-900mb-6'>
                  OurMission
                </h2>
                <pclassName='text-lgtext-gray-600mb-6'>
                  AtZionTech Groupwebelievethat technologyshouldempower
                  businessestoachieve theirfullpotential. Ourmissionis todemocratizeaccess tocutting-edgeAIand technologysolutionsmakingthemaccessible tobusinessesof allsizes.
                </p>
                <pclassName = 'text-lgtext-gray-600mb-8'>
                  Wecombinedeep technicalexpertisewith businessacumento
                  deliversolutionsthat notonlymeet yourimmediateneeds butalsoposition youforlong-termsuccessin anincreasinglydigital world.
                </p>
                <Linkto='/contact'
                  className='inline-flexitems-centerbg-blue-600text-whitepx-6py-3rounded-lgfont-semiboldhover: bg-blue-700transition-colors'
                >
                  StartYourJourney
                  <ArrowRight,className='w-5 h-5ml-2' />
                </Link>
              </motion.div>

              <motion.divinitial={{ opacity: 0x: 20 }}
                animate = {{ opacity:  1x:  0 }}
                transition = {{ duration: 0.6delay: 0.2 }}
                className = 'bg-whiterounded-xlshadow-lgp-8'
              >
                <h3className='text-2xlfont-boldtext-gray-900mb-6'>
                  OurVision
                </h3>
                <divclassName='space-y-4'>
                  <divclassName='flexitems-startgap-3'>
                    <CheckCircle,className='w-6 h-6text-green-600flex-shrink-0mt-1' />
                    <div>
                      <h4className='font-semiboldtext-gray-900'>
                        TransformIndustries
                      </h4>
                      <pclassName='text-gray-600'>
                        Revolutionizehowbusinesses operatethroughAI andautomation
                      </p>
                    </div>
                  </div>
                  <divclassName='flexitems-startgap-3'>
                    <CheckCircle,className='w-6 h-6text-green-600flex-shrink-0mt-1' />
                    <div>
                      <h4className='font-semiboldtext-gray-900'>
                        EmpowerInnovation
                      </h4>
                      <pclassName='text-gray-600'>
                        Enablecompaniesto innovatefasterand moreeffectively
                      </p>
                    </div>
                  </div>
                  <divclassName='flexitems-startgap-3'>
                    <CheckCircle,className='w-6 h-6text-green-600flex-shrink-0mt-1' />
                    <div>
                      <h4className='font-semiboldtext-gray-900'>
                        DriveGrowth
                      </h4>
                      <pclassName='text-gray-600'>
                        Helpbusinessesscale andachievesustainable growth
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ValuesSection */}
        <sectionclassName='py-20bg-white'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
              className = 'text-centermb-16'
            >
              <h2className='text-3xlmd: text-4xlfont-boldtext-gray-900mb-4'>
                OurValues
              </h2>
              <pclassName='text-xltext-gray-600max-w-2xlmx-auto'>
                Theprinciplesthat guideeverythingwe doandshape ourrelationshipswith clientsandpartners
              </p>
            </motion.div>

            <divclassName='gridgrid-cols-1md:grid-cols-2lg:grid-cols-4gap-8'>
              { values.map((valueindex) = > (
                <motion.divkey = { index  }initial = {{ opacity:  0y: 20 }}
                  animate = {{ opacity:  1y:  0 }}
                  transition = {{ duration: 0.6delay: index * 0.1 }}
                  className = 'text-center'
                >
                  <divclassName='w-16h-16bg-blue-100rounded-lgflexitems-centerjustify-centermx-automb-4'>
                    <value.iconclassName='w-8 h-8text-blue-600' />
                  </div>
                  <h3className='text-xlfont-boldtext-gray-900mb-3'>
                    {value.title}
                  </h3>
                  <pclassName='text-gray-600'>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TeamSection */}
        <sectionclassName = 'py-20'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
              className = 'text-centermb-16'
            >
              <h2className='text-3xlmd: text-4xlfont-boldtext-gray-900mb-4'>
                MeetOurTeam
              </h2>
              <pclassName='text-xltext-gray-600max-w-2xlmx-auto'>
                Experiencedprofessionalspassionate aboutdeliveringexceptional results
              </p>
            </motion.div>

            <divclassName='gridgrid-cols-1md:grid-cols-2lg:grid-cols-4gap-8'>
              { team.map((memberindex) = > (
                <motion.divkey = { index  }initial = {{ opacity:  0y: 20 }}
                  animate = {{ opacity:  1y:  0 }}
                  transition = {{ duration: 0.6delay: index * 0.1 }}
                  className = 'bg-whiterounded-xlshadow-lgp-6text-centerhover: shadow-xltransition-shadow'
                >
                  <divclassName='w-24h-24bg-gradient-to-rfrom-blue-500to-purple-600rounded-fullflexitems-centerjustify-centermx-automb-4'>
                    <spanclassName='text-2xlfont-boldtext-white'>
                      { member.name
                        .split(' ')
                        .map(n = > n[0])
                        .join('') }
                    </span>
                  </div>
                  <h3className = 'text-xlfont-boldtext-gray-900mb-2'>
                    {member.name}
                  </h3>
                  <pclassName='text-blue-600font-semiboldmb-2'>
                    {member.role}
                  </p>
                  <pclassName='text-gray-600text-smmb-2'>
                    {member.expertise}
                  </p>
                  <pclassName='text-gray-500text-xs'>{member.experience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AchievementsSection */}
        <sectionclassName = 'py-20bg-white'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
              className = 'text-centermb-16'
            >
              <h2className='text-3xlmd: text-4xlfont-boldtext-gray-900mb-4'>
                OurAchievements
              </h2>
              <pclassName='text-xltext-gray-600max-w-2xlmx-auto'>
                Recognitionandmilestones thatreflectour commitmenttoexcellence
              </p>
            </motion.div>

            <divclassName='gridgrid-cols-1md:grid-cols-2lg:grid-cols-4gap-8'>
              { achievements.map((achievementindex) = > (
                <motion.divkey = { index  }initial = {{ opacity:  0y: 20 }}
                  animate = {{ opacity:  1y:  0 }}
                  transition = {{ duration: 0.6delay: index * 0.1 }}
                  className = 'text-center'
                >
                  <divclassName='w-16h-16bg-green-100rounded-lgflexitems-centerjustify-centermx-automb-4'>
                    <achievement.iconclassName='w-8 h-8text-green-600' />
                  </div>
                  <h3className='text-lgfont-boldtext-gray-900mb-2'>
                    {achievement.title}
                  </h3>
                  <pclassName='text-gray-600text-sm'>
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTASection */}
        <sectionclassName = 'py-20bg-gradient-to-rfrom-blue-600to-purple-600'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8text-center'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
            >
              <h2className = 'text-3xlmd: text-4xlfont-boldtext-whitemb-4'>
                ReadytoWork Together?
              </h2>
              <pclassName='text-xltext-blue-100mb-8max-w-2xlmx-auto'>
                Let'sdiscusshow wecanhelp transformyourbusiness withinnovativetechnology solutions.
              </p>
              <divclassName='flexflex-colsm:flex-rowgap-4justify-center'>
                <Linkto='/contact'
                  className='bg-whitetext-blue-600px-8py-3rounded-lgfont-semiboldhover:bg-gray-100transition-colorsflexitems-centerjustify-center'
                >
                  GetinTouch
                  <ArrowRight,className='w-5 h-5ml-2' />
                </Link>
                <Linkto='/services'
                  className='borderborder-whitetext-whitepx-8py-3rounded-lgfont-semiboldhover:bg-blue-700transition-colors'
                >
                  ViewOurServices
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

exportdefaultAbout;
