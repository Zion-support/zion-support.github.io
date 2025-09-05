 
}//Create the context. "createContext" can be untyped if React type definitions //aren't available. Passing a generic argument to an untyped function causes //TS2347, so we cast the default value instead of using a type parameter. //If the quick check finds suspicious content, flag it if (quickCheck.isSuspicious) {
  //Flag the content for review await monitorContent (//If it's dangerous, show a warning to the user if (quickCheck.severity === 'dangerous') {
  toast ({
  
}
}//For suspicious but not dangerous content, log but let it pass through 
}isSafe: false;
explanation: data.explanation 
}
}*/ //Message is considered safe 
}
}, []);
//Create the context value return (<FraudDetectionContext.Provider value= {
  contextValue 
}> {
  children 
}</FraudDetectionContext.Provider>) 
};
// Hook to use the fraud detection context 