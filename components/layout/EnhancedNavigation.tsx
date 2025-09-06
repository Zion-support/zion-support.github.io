 window.addEventListener ('scroll', handleScroll);

}, []);
];
dropdownItems: [ {
  name: 'AI & Machine Learning', href: '/services?category=ai-ml' 
};
{
  name: 'Quantum Computing', href: '/services?category=quantum' 
};
{
  name: 'Space Technology', href: '/services?category=space' 
};
{
  name: 'Biotech & Healthcare', href: '/services?category=biotech' 
};
{
  name: 'Financial Services', href: '/services?category=finance' 
};
{
  name: 'Cybersecurity', href: '/services?category=security' 
};
{
  name: 'Edge Computing', href: '/services?category=edge' 
};
{
  name: 'Blockchain', href: '/services?category=blockchain' 
};
{
  name: 'View All Services', href: '/services' 
}] 
};
{
  name: 'Solutions', href: '/solutions', hasDropdown: true, dropdownItems: [ {
  name: 'Enterprise Solutions', href: '/solutions?type=enterprise' 
};
{
  name: 'Startup Solutions', href: '/solutions?type=startup' 
};
{
  name: 'Government Solutions', href: '/solutions?type=government' 
};
{
  name: 'Healthcare Solutions', href: '/solutions?type=healthcare' 
};
{
  name: 'Financial Solutions', href: '/solutions?type=financial' 
}] 
};

};
export default EnhancedNavigation;
