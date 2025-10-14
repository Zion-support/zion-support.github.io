import fs from 'fs';
import { glob } from 'glob';

// Find all 5g page files
const pageFiles = glob.sync('app/5g-*/page.tsx');

console.log(`Found ${pageFiles.length} 5G page files to fix`);

const featuresData = {
  '5g-consulting': [
    { icon: '📊', title: 'Strategic Planning', description: 'Comprehensive 5G strategy development and implementation planning.' },
    { icon: '🔧', title: 'Technical Expertise', description: 'Deep technical knowledge of 5G networks and infrastructure.' },
    { icon: '📈', title: 'Performance Optimization', description: 'Optimize your 5G network for maximum performance and efficiency.' }
  ],
  '5g-deployment': [
    { icon: '🚀', title: 'Rapid Deployment', description: 'Fast and efficient 5G network deployment services.' },
    { icon: '⚡', title: 'High Performance', description: 'Deliver exceptional performance with our 5G solutions.' },
    { icon: '🛡️', title: 'Secure Implementation', description: 'Secure and reliable 5G network implementation.' }
  ],
  '5g-integration': [
    { icon: '🔗', title: 'Seamless Integration', description: 'Integrate 5G technology with your existing systems.' },
    { icon: '🔄', title: 'System Compatibility', description: 'Ensure compatibility across all your business systems.' },
    { icon: '📱', title: 'Mobile Optimization', description: 'Optimize your mobile applications for 5G networks.' }
  ],
  '5g-maintenance': [
    { icon: '🔧', title: 'Proactive Maintenance', description: 'Preventive maintenance to keep your 5G network running smoothly.' },
    { icon: '📊', title: 'Performance Monitoring', description: 'Continuous monitoring of network performance and health.' },
    { icon: '🛠️', title: 'Expert Support', description: '24/7 expert support for all your 5G maintenance needs.' }
  ],
  '5g-migration': [
    { icon: '🔄', title: 'Smooth Migration', description: 'Seamless migration from legacy systems to 5G technology.' },
    { icon: '📋', title: 'Migration Planning', description: 'Comprehensive planning for your 5G migration strategy.' },
    { icon: '✅', title: 'Zero Downtime', description: 'Minimize downtime during your 5G migration process.' }
  ],
  '5g-modernization': [
    { icon: '🆕', title: 'Modern Solutions', description: 'Upgrade to modern 5G technology and infrastructure.' },
    { icon: '⚡', title: 'Enhanced Performance', description: 'Significantly improve your network performance and speed.' },
    { icon: '🔮', title: 'Future-Ready', description: 'Prepare your infrastructure for future technological advances.' }
  ],
  '5g-monitoring': [
    { icon: '👁️', title: 'Real-time Monitoring', description: 'Monitor your 5G network performance in real-time.' },
    { icon: '📊', title: 'Analytics Dashboard', description: 'Comprehensive analytics and reporting dashboard.' },
    { icon: '🚨', title: 'Alert System', description: 'Proactive alerts for network issues and performance problems.' }
  ],
  '5g-optimization': [
    { icon: '⚡', title: 'Performance Tuning', description: 'Optimize your 5G network for maximum performance.' },
    { icon: '📈', title: 'Efficiency Gains', description: 'Achieve significant efficiency improvements in your network.' },
    { icon: '🎯', title: 'Targeted Solutions', description: 'Customized optimization solutions for your specific needs.' }
  ],
  '5g-performance': [
    { icon: '🏃', title: 'High Speed', description: 'Achieve maximum speed and performance with 5G technology.' },
    { icon: '📊', title: 'Performance Metrics', description: 'Track and analyze key performance indicators.' },
    { icon: '🎯', title: 'Optimized Results', description: 'Deliver optimized results for your business objectives.' }
  ],
  '5g-reliability': [
    { icon: '🛡️', title: 'High Reliability', description: 'Ensure maximum reliability and uptime for your 5G network.' },
    { icon: '🔒', title: 'Secure Infrastructure', description: 'Robust security measures for your 5G infrastructure.' },
    { icon: '✅', title: 'Proven Track Record', description: 'Demonstrated reliability across multiple deployments.' }
  ],
  '5g-scalability': [
    { icon: '📈', title: 'Scalable Solutions', description: '5G solutions that grow with your business needs.' },
    { icon: '🔄', title: 'Flexible Architecture', description: 'Flexible architecture that adapts to changing requirements.' },
    { icon: '🌐', title: 'Global Reach', description: 'Scale your operations globally with 5G technology.' }
  ],
  '5g-security': [
    { icon: '🔐', title: 'Advanced Security', description: 'State-of-the-art security measures for 5G networks.' },
    { icon: '🛡️', title: 'Threat Protection', description: 'Comprehensive protection against cyber threats.' },
    { icon: '🔍', title: 'Security Monitoring', description: 'Continuous monitoring and threat detection.' }
  ],
  '5g-support': [
    { icon: '🎧', title: '24/7 Support', description: 'Round-the-clock support for all your 5G needs.' },
    { icon: '👨‍💻', title: 'Expert Team', description: 'Dedicated team of 5G experts and specialists.' },
    { icon: '🚀', title: 'Rapid Response', description: 'Quick response times for all support requests.' }
  ],
  '5g-testing': [
    { icon: '🧪', title: 'Comprehensive Testing', description: 'Thorough testing of all 5G network components.' },
    { icon: '📊', title: 'Performance Validation', description: 'Validate performance metrics and benchmarks.' },
    { icon: '✅', title: 'Quality Assurance', description: 'Ensure quality and reliability through rigorous testing.' }
  ],
  '5g-training': [
    { icon: '🎓', title: 'Expert Training', description: 'Professional training programs for 5G technology.' },
    { icon: '📚', title: 'Comprehensive Curriculum', description: 'Complete curriculum covering all aspects of 5G.' },
    { icon: '👨‍🏫', title: 'Certified Instructors', description: 'Learn from certified 5G experts and professionals.' }
  ],
  '5g-transformation': [
    { icon: '🔄', title: 'Digital Transformation', description: 'Transform your business with 5G technology.' },
    { icon: '🚀', title: 'Innovation Drive', description: 'Drive innovation and competitive advantage.' },
    { icon: '📈', title: 'Business Growth', description: 'Accelerate business growth with 5G solutions.' }
  ],
  '5g-upgrade': [
    { icon: '⬆️', title: 'Seamless Upgrade', description: 'Smooth upgrade process to 5G technology.' },
    { icon: '⚡', title: 'Enhanced Performance', description: 'Significant performance improvements with 5G.' },
    { icon: '🔧', title: 'Expert Implementation', description: 'Professional implementation by 5G experts.' }
  ]
};

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the service name from the file path
    const serviceName = filePath.match(/app\/(5g-[^\/]+)\/page\.tsx$/)?.[1];
    
    if (serviceName && featuresData[serviceName]) {
      console.log(`Adding features data to ${filePath}`);
      
      // Add features array after the function declaration
      const featuresArray = `const features = ${JSON.stringify(featuresData[serviceName], null, 2)};`;
      
      // Find the function declaration and add features after it
      const functionMatch = content.match(/function Page\(\): JSX\.Element \{/);
      if (functionMatch) {
        const insertIndex = functionMatch.index + functionMatch[0].length;
        content = content.slice(0, insertIndex) + '\n  ' + featuresArray + '\n' + content.slice(insertIndex);
        
        fs.writeFileSync(filePath, content);
        console.log(`Fixed ${filePath}`);
      }
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('5G features fixes completed');