  Lock,
  Shield,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,


noSequential: !hasSequentialChars (pass) 
}
setChecks (newChecks)
//Calculate strength score //Bonus for length if (pass.length >= 12) score += 10
if (pass.length >= 16) score += 5
setStrength (score)
//Set strength text and color //Generate suggestions generateSuggestions (newChecks, pass) 
}
//Ensure at least one of each required character type result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor (Math.random () * 26) ], //Uppercase result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor (Math.random () * 26) ], //Lowercase result += '0123456789'[Math.floor (Math.random () * 10) ], //Number result += '!@#$%^&*'[Math.floor (Math.random () * 8) ], //Symbol //Fill the rest randomly const getCheckIcon = (passed: boolean) => {
  return passed ? (<CheckCircle className="w-5 h-5 text-green-400" />) : (/* Hero Section */ 
}<section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <div className="mb-8"> <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6"> <Lock className="w-4 h-4 mr-2" /> Password Security & Analysis </div> </div> <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"> Password Strength Checker </h1> <p className="text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed"> Analyze your password security with our advanced strength checker. Get detailed feedback, suggestions, and generate strong passwords to protect your accounts and data. </p> </div> </section> {
  /* Password Checker Tool */ 
}<section className="py-20 bg-gray-900"> <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6"> Check Your Password Strength </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto"> Our advanced security analyzer evaluates multiple factors to determine password strength and security. </p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> {
  /* Input Form */ 
}<Card className="p-8 bg-gray-800 border border-gray-700"> <h3 className="text-2xl font-bold text-white mb-6 flex items-center"> <Lock className="w-6 h-6 mr-3 text-indigo-400" /> Password Analysis </h3> <div className="space-y-6"> {
  /* Password Input */ 
}<div> <label className="block text-sm font-medium text-gray-300 mb-2"> Enter Password </label> <div className="relative" > <input className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white" > {
  showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" /> 
}</button> </div> </div> {
  /* Generate Password */ 
}<div> <Button onClick= {
  generateStrongPassword 
}className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold" > <RefreshCw className="w-5 h-5 mr-2" /> Generate Strong Password </Button> </div> {
  /* Generated Password Display */ 
}{
  generatedPassword && (<div className="p-4 bg-gray-700 rounded-lg border border-gray-600"> <div className="flex items-center justify-between"> <span className="text-sm text-gray-300" >Generated Password:</span> <Button onClick= {
  () => copyToClipboard (generatedPassword) 
}variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-600" > <Copy className="w-4 h-4 mr-2" /> Copy </Button> </div> <div className="mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all"> {
  generatedPassword 
}</div> </div>) 
}<div className="text-sm text-gray-400"> <p>• Real-time strength analysis</p> <p>• Multiple security criteria</p> <p>• Detailed feedback and suggestions</p> <p>• Strong password generator</p> </div> </div> </Card> {
  /* Strength Analysis */ 
}<Card className="p-8 bg-gray-800 border border-gray-700"> <h3 className="text-2xl font-bold text-white mb-6 flex items-center"> <Shield className="w-6 h-6 mr-3 text-purple-400" /> Security Analysis </h3> {
  password ? (<div className="space-y-6"> {
  /* Strength Score */ 
}<div> <div className="flex items-center justify-between mb-2"> <span className="text-sm text-gray-300">Password Strength:</span> <span className= {
  `text-lg font-bold $ {
  strengthColor 
}` 
}> {
  strengthText 
}({
  strength 
}/100) </span> </div> <div className="w-full bg-gray-700 rounded-full h-3"> <div className= {
  `h-3 rounded-full transition-all duration-300 $ {
  getStrengthBarColor () 
}` 
}style= {
  {
  width: `$ {
  strength 
}%` 
}
}/> </div> </div> {
  /* Security Checks */ 
}<div> <h4 className="text-lg font-semibold text-white mb-3">Security Criteria</h4> <div className="space-y-3"> {
  Object.entries (checks) .map ( ([key, passed]) => (<div key= {
  key 
}className="flex items-center space-x-3"> {
  getCheckIcon (passed) 
}<span className= {
  `text-sm $ {
  passed ? 'text-green-400' : 'text-red-400' 
}` 
}> {
  key === 'length' && 'At least 8 characters' 
}{
  key === 'uppercase' && 'Contains uppercase letter' 
}{
  key === 'lowercase' && 'Contains lowercase letter' 
}{
  key === 'numbers' && 'Contains number' 
}{
  key === 'symbols' && 'Contains special character' 
}{
  key === 'noCommon' && 'Not a common password' 
}{
  key === 'noSequential' && 'No sequential characters' 
}</span> </div>) ) 
}</div> </div> {
  /* Suggestions */ 
}{
  suggestions.length > 0 && (<div> <h4 className="text-lg font-semibold text-white mb-3">Suggestions</h4> <div className="space-y-2"> {
  suggestions.map ( (suggestion, index) => (<div key= {
  index 
}className="flex items-start space-x-3"> <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" /> <span className="text-sm text-yellow-300"> {
  suggestion 
}</span> </div>) ) 
}</div> </div>) 
}</div>) : (<div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center"> <div className="text-6xl mb-4">🔒</div> <p className="text-gray-400"> Enter a password above to see the security analysis and get personalized suggestions. </p> </div>) 
}</Card> </div> </div> </section> {
  /* Features */ 
}<section className="py-20 bg-gray-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6"> Advanced Password Security Features </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto"> Comprehensive password analysis with real-time feedback and security recommendations. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <Card className="text-center p-8 bg-gray-700 border border-gray-600"> <div className="text-4xl mb-4">🔍</div> <h3 className="text-xl font-bold text-white mb-4">Real-time Analysis</h3> <p className="text-gray-400"> Get instant feedback on password strength as you type with our advanced security algorithms. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600"> <div className="text-4xl mb-4">📊</div> <h3 className="text-xl font-bold text-white mb-4">Comprehensive Scoring</h3> <p className="text-gray-400"> Multi-factor analysis including length, complexity, and common password detection. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600"> <div className="text-4xl mb-4">💡</div> <h3 className="text-xl font-bold text-white mb-4">Smart Suggestions</h3> <p className="text-gray-400"> Personalized recommendations to improve your password security and strength. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600"> <div className="text-4xl mb-4">🔐</div> <h3 className="text-xl font-bold text-white mb-4">Password Generator</h3> <p className="text-gray-400"> Generate cryptographically secure passwords that meet all security requirements. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600"> <div className="text-4xl mb-4">🛡️</div> <h3 className="text-xl font-bold text-white mb-4">Security Standards</h3> <p className="text-gray-400"> Based on industry best practices and security standards for maximum protection. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600"> <div className="text-4xl mb-4">🔒</div> <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3> <p className="text-gray-400"> Your passwords are never stored or transmitted - analysis happens locally in your browser. </p> </Card> </div> </div> </section> {
  /* Security Tips */ 
}<section className="py-20 bg-gray-900"> <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6"> Password Security Best Practices </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto"> Follow these guidelines to create and maintain strong, secure passwords for all your accounts. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <Card className="p-8 bg-gray-800 border border-gray-700"> <div className="text-4xl mb-4">✅</div> <h3 className="text-2xl font-bold text-white mb-4">Do's</h3> <ul className="space-y-3 text-gray-300"> <li className="flex items-start"> <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" /> Use at least 12 characters for important accounts </li> <li className="flex items-start"> <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" /> Include uppercase, lowercase, numbers, and symbols </li> <li className="flex items-start"> <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" /> Use unique passwords for each account </li> <li className="flex items-start"> <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" /> Consider using a password manager </li> <li className="flex items-start"> <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" /> Update passwords regularly </li> </ul> </Card> <Card className="p-8 bg-gray-800 border border-gray-700"> <div className="text-4xl mb-4">❌</div> <h3 className="text-2xl font-bold text-white mb-4">Don'ts</h3> <ul className="space-y-3 text-gray-300"> <li className="flex items-start"> <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" /> Don't use personal information (names, birthdays) </li> <li className="flex items-start"> <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" /> Avoid common words or patterns </li> <li className="flex items-start"> <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" /> Never share passwords with others </li> <li className="flex items-start"> <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" /> Don't reuse passwords across accounts </li> <li className="flex items-start"> <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" /> Avoid writing passwords down </li> </ul> </Card> </div> </div> </section> {
  /* CTA Section */ 
}<section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600"> <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6"> Ready to Secure Your Passwords? </h2> <p className="text-xl text-indigo-100 mb-8"> Join thousands of users who trust our password strength checker to improve their account security. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Button href="/contact" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100" > Get Started Today <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button href="/pricing" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-600" > View Pricing </Button> </div> </div> </section> </>) 

}




      length: false,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,

          <p className='text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed'    />
            Analyze your password security with our advanced strength checker.
            Get detailed feedback, suggestions, and generate strong passwords to;
protect your accounts and data.

      {/* Password Checker Tool */}



              Check Your Password Strength;
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />
              Our advanced security analyzer evaluates multiple factors to;

            {/* Input Form *,}
}
            <Card className='p-8 bg-gray-800 border border-gray-700'    />;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'    />;
                <Lock className='w-6 h-6 mr-3 text-indigo-400'    />;
                Password Analysis;
              </h3>;
              <div className='space-y-6'    />;



                      {showPassword ? (<EyeOff className='w-5 h-5'    />;}
                      ) : (<Eye className='w-5 h-5'    />;}
                      )}




                {/* Generate Password */}
                <div>;
                  <Button
                    onClick={generateStrongPassword}




                        variant='outline'
                        size='sm'
                        className='border-gray-600 text-gray-300 hover:bg-gray-600'
                      >
                        <Copy className='w-4 h-4 mr-2'    />
                        Copy;
                      </Button>
                    </div>
                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'    />

                      {generatedPassword}

                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'    />                      {generatedPassword}{generatedPasswor,}
}</div>;

                  </div>;
                    </div>;
                  </div>;


                    </div>
                  </div>



                </div>
              </div>
            </Card>
            {/* Strength Analysis */}



              {password ? (



                  <div    />;
                    <div className='flex items-center justify-between mb-2'    />;
                      <span className='text-sm text-gray-300'    />;
                        Password Strength:;
                      </span>                      <span className={`text-lg font-bold ${strengthColor}`}    />

                        {strengthText} ({strength}/100)</span>;
                      <span className={`text-lg font-bold ${strengthColor}`}    />

                        {strengthText} ({strength}/100)</span>;
                    </div>;
<div className='w-full bg-gray-700 rounded-full h-3'    />;

                      <div;
                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}
                        style={{ width: `${strength}%` ,
}
                         />;
                    </div>;
                  </div>;

                  <div    />;
                    <div className=\"flex items-center justify-between mb-2\"    />;
                      <span className=\"text-sm text-gray-300\"    />Password Strength:</span>;
                        {strengthText} ({strength}/100)</span>;
                    </div>;
                    <div className='w-full bg-gray-700 rounded-full h-3'    />;
                      <div                    <div className=\"w-full bg-gray-700 rounded-full h-3\"    />;

                      <div;
                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}
                        style={{ width: `${strength}%` ,
}
                         />;
                    </div>;
                  </div>;{/* Security Checks */}

                  <div    />;
<h4 className='text-lg font-semibold text-white mb-3'    />;
                      Security Criteria;
                    </h4>;
                    <div className='space-y-3'    />;
                      {Object.entries(checks).map(([key, passed]) => (<div key={key} className='flex items-center space-x-3'    />;

                          {getCheckIcon(passed)}

                          <span;

              {password ? (            <Card className="p-8 bg-gray-800 border border-gray-700">;
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">;
                <Shield className="w-6 h-6 mr-3 text-purple-400" />;
                Security Analysis;
              </h3>;
              {password ? (;
                <div className='space-y-6'>;




                  </div>;






                              />






                            {key === 'length' && 'At least 8 characters'}
                            {key === 'uppercase' && 'Contains uppercase letter'}
                            {key === 'lowercase' && 'Contains lowercase letter'}
                            {key === 'numbers' && 'Contains number'}

                            {key === 'symbols' && 'Contains special character'}


                            {key === 'noCommon' && 'Not a common password'}
{key === 'noSequential' &&}
                              'No sequential characters'}

                          </span>
                        </div>
                      ))}



                    </div>;
                  </div>;






                  {/* Suggestions */}
                  {suggestions.length > 0 && (

                    <div    />
<h4 className='text-lg font-semibold text-white mb-3'    />
                        Suggestions;
                      </h4>
                      <div className='space-y-2'    />
                        {suggestions.map((suggestion, index) => (}
                          <div;}
key={index}
                            className='flex items-start space-x-3'    />

                    </div>;
                  )}
                </div>;
              ) : (<div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'    />;
                  <div className='text-6xl mb-4'    />🔒</div>;
                  <p className='text-gray-400'    />;
                    Enter a password above to see the security analysis and get;
                    personalized suggestions.;
                  </p>;
                </div>;
              )}
            </Card>;
          </div>;
        </div>;
      </section>;
                  {/* Suggestions */}

                  {suggestions && suggestions.length > 0 && (<div    />;
                      <h4 className='text-lg font-semibold text-white mb-3'    />;

                        Suggestions;
                      </h4>;
                      <div className='space-y-2'    />;}
                        {suggestions && suggestions.map((suggestion, index) => (<div;}
                            key={index}

                            className='flex items-start space-x-3'    />;
                            <AlertTriangle className='w-4 h-4 text-yellow-400 mt-0 && 0.5 flex-shrink-0'    />;
                            <span className='text-sm text-yellow-300'    />;
                              {suggestion}
                            </span>                          </div>                      <h4 className=\"text-lg font-semibold text-white mb-3\"    />Suggestions</h4>;
                      <div className=\"space-y-2\"    />;
                        {suggestions && suggestions.map((suggestion, index) => (<div key={index} className=\"flex items-start space-x-3\"    />;
                            <AlertTriangle className=\"w-4 h-4 text-yellow-400 mt-0 && 0.5 flex-shrink-0\"    />;
                            <span className=\"text-sm text-yellow-300\"    />{suggestion}</span>;
                        ))}
                      </div>;

                    </div>;













      {/* Features */}


<section className='py-20 bg-gray-800'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
          <div className='text-center mb-16'    />
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'    />
            </h2>
            <p className=\"text-xl text-gray-400 max-w-3xl mx-auto\"    />

              Comprehensive password analysis with real-time feedback and security recommendations.
            </p>
          </div>


          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />
            <Card className=\"text-center p-8 bg-gray-700 border border-gray-600\"    />
              <div className=\"text-4xl mb-4\"    />🔍</div>
              <h3 className=\"text-xl font-bold text-white mb-4\"    />Real-time Analysis</h3>
              <p className=\"text-gray-400\"    />

                Get instant feedback on password strength as you type with our advanced security algorithms.
              </p>
            </Card>


            <Card className=\"text-center p-8 bg-gray-700 border border-gray-600\"    />
              <div className=\"text-4xl mb-4\"    />📊</div>
              <h3 className=\"text-xl font-bold text-white mb-4\"    />Comprehensive Scoring</h3>
              <p className=\"text-gray-400\"    />

                Multi-factor analysis including length, complexity, and common password detection.
              </p>
            </Card>


            <Card className=\"text-center p-8 bg-gray-700 border border-gray-600\"    />
              <div className=\"text-4xl mb-4\"    />💡</div>
              <h3 className=\"text-xl font-bold text-white mb-4\"    />Smart Suggestions</h3>
              <p className=\"text-gray-400\"    />

                Personalized recommendations to improve your password security and strength.
              </p>
            </Card>


            <Card className=\"text-center p-8 bg-gray-700 border border-gray-600\"    />
              <div className=\"text-4xl mb-4\"    />🔐</div>
              <h3 className=\"text-xl font-bold text-white mb-4\"    />Password Generator</h3>
              <p className=\"text-gray-400\"    />

                Generate cryptographically secure passwords that meet all security requirements.
              </p>
            </Card>


            <Card className=\"text-center p-8 bg-gray-700 border border-gray-600\"    />
              <div className=\"text-4xl mb-4\"    />🛡️</div>
              <h3 className=\"text-xl font-bold text-white mb-4\"    />Security Standards</h3>
              <p className=\"text-gray-400\"    />

                Based on industry best practices and security standards for maximum protection.
              </p>
            </Card>


            <Card className="text-center p-8 bg-gray-700 border border-gray-600">


              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>
              <p className="text-gray-400">
                Your passwords are never stored or transmitted - analysis happens locally in your browser.




              </p>




      {/* Security Tips */}





                  Avoid writing passwords down



      {/* CTA Section */}

<section className='py-20 bg-gradient-to-r from-indigo-600 to-purple-600'    />
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'    />

              variant='outline'
              size='lg'


              className='border-white text-white hover:bg-white hover:text-indigo-600'
                />
              View Pricing;

            </Button>
          </div>
        </div>
      </section>

    <   />
  );
}






