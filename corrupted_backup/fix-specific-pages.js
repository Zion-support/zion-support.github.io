
  
}results.details.push ({
  file: pagePath;
...result 
}) 
}//Generate summary //Save detailed report const reportPath = path.join (process.cwd (), 'targeted-page-restoration-report.json');
fs.writeFileSync (reportPath, JSON.stringify (results, null, 2) );
return results;
}// Run the restoration if this script is executed directly 

