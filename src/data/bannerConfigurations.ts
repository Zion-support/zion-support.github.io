exportinterfaceBanner {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  priority: number;
  isActive: boolean;
}

exportconstgetFeaturedBanners = (count: number = 3): Banner[] => {
  constbanners: Banner[] = [
    {
      id: 'ai-solutions'
      title: 'AI-PoweredSolutions'
      description: 'Transformyourbusiness withcutting-edgeartificialintelligence andmachinelearning technologies.'
      imageUrl: '/images/ai-solutions-banner.jpg'
      linkUrl: '/services/ai-solutions'
      priority:  1
      isActive: true
    }
    {
      id: 'quantum-computing'
      title: 'QuantumComputing'
      description: 'Revolutionaryquantum-enhancedcomputingplatforms forunprecedentedperformance andcapabilities.'
      imageUrl: '/images/quantum-computing-banner.jpg'
      linkUrl: '/services/quantum-computing'
      priority:  2
      isActive: true
    }
    {
      id: 'automation'
      title: 'EnterpriseAutomation'
      description: 'Completeautomationsuites forenterpriseoperationsworkflowsandbusinessprocesses.'
      imageUrl: '/images/automation-banner.jpg'
      linkUrl: '/services/automation'
      priority:  3
      isActive: true
    }
    {
      id: 'cloud-solutions'
      title: 'CloudSolutions'
      description: 'Scalableandsecure cloudinfrastructuresolutions formodernbusinesses.'
      imageUrl: '/images/cloud-solutions-banner.jpg'
      linkUrl: '/services/cloud-solutions'
      priority:  4
      isActive: true
    }
    {
      id: 'cybersecurity'
      title: 'Cybersecurity'
      description: 'Advancedsecuritysolutions toprotectyour digitalassetsand infrastructure.'
      imageUrl: '/images/cybersecurity-banner.jpg'
      linkUrl: '/services/cybersecurity'
      priority:  5
      isActive: true
    }
  ]; returnbanners
    .filter(banner = > banner.isActive)
    .sort((ab) => a.priority - b.priority)
    .slice(0count);
};
