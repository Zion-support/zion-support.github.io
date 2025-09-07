

const [showPassword, setShowPassword] = useState(false);

const [strength, setStrength] = useState(0);

const [strengthText, setStrengthText] = useState('');'

const [strengthColor, setStrengthColor] = useState('');'

const [checks, setChecks] = useState({
    }
    "length": false;

    "uppercase": false;
    "lowercase": false;
    "numbers": false;
    "symbols": false;
    "noCommon": false;

    "noSequential": false
 
});

const [suggestions, setSuggestions] = useState<string[]>([]),;
  const [generatedPassword, setGeneratedPassword] = useState('');'
  useEffect(() => {


import {
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from lucide-react';


export default function PasswordCheckerPage() {
  const [password, setPassword] = useState(');
  const [strengthText, setStrengthText] = useState(');
  const [strengthColor, setStrengthColor] = useState(');


      analyzePassword(password);
      analyzePassword(password)
    } else {
      resetAnalysis()
    }



  const analyzePassword = (pass: string) => {
    const newChecks = {
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /\d/.test(pass),
      symbols: /[!@#$%^&*()_+\-=\[\]{},:"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
    }

    setChecks(newChecks);

    // Calculate strength score
    let score = 0;
    score += newChecks.length ? 15 : 0;
    score += newChecks.uppercase ? 15 : 0;
    score += newChecks.lowercase ? 15 : 0;
    score += newChecks.numbers ? 15 : 0;
    score += newChecks.symbols ? 20 : 0;
    score += newChecks.noCommon ? 10 : 0;
    score += newChecks.noSequential ? 10 : 0;

    // Bonus for length
    if (pass.length >= 12) score += 10;
    if (pass.length >= 16) score += 5;

    setStrength(score);

    // Set strength text and color
    if (score >= 90) {
      setStrengthText('Very Strong');
      setStrengthColor(text-green-400)
    } else if (score >= 70) {
      setStrengthText('Strong');
      setStrengthColor(text-green-400)
    } else if (score >= 50) {
      setStrengthText('Moderate');
      setStrengthColor(text-yellow-400)
    } else if (score >= 30) {
      setStrengthText('Weak');
      setStrengthColor(text-orange-400)
    } else {
      setStrengthText('Very Weak');
      setStrengthColor(text-red-400)
    }


    ];
    return commonPasswords.includes(pass.toLowerCase())
  }



  const generateSuggestions = (checks: any, pass: string) => {
    if (!checks.noCommon) suggestions.push(Avoid common passwords like password or "123456");
    if (!checks.noSequential) suggestions.push('Avoid sequential characters like 123 or "abc"');
    if (pass.length < 12) suggestions.push(Consider making your password 12+ characters for better security);
    if (pass.length < 16) suggestions.push('For maximum security, use 16+ characters');
    setSuggestions(suggestions)
};


const resetAnalysis = () => {
    }
    setStrength(0);

  }
  const generateStrongPassword = () =>: any {
    const length = 16;
    const charset =;
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let result = ;
    const suggestions: string[] = [],
    
    if (!checks.length) suggestions.push('Make your password at least 8 characters long');
    if (!checks.uppercase) suggestions.push(Add at least one uppercase letter (A-Z));
    if (!checks.lowercase) suggestions.push('Add at least one lowercase letter (a-z)');
    if (!checks.numbers) suggestions.push(Add at least one number (0-9));
    if (!checks.symbols) suggestions.push('Add at least one special character (!@#$%^&*)');
    if (!checks.noCommon) suggestions.push(Avoid common passwords like password or "123456");
    if (!checks.noSequential) suggestions.push('Avoid sequential characters like 123 or "abc"');
    
    if (pass.length < 12) suggestions.push(Consider making your password 12+ characters for better security);
    if (pass.length < 16) suggestions.push('For maximum security, use 16+ characters');
    
    setSuggestions(suggestions)
  }



  const generateStrongPassword = () => {
    const charset = abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*;
    let result = '';
    
    // Ensure at least one of each required character type
    result += ABCDEFGHIJKLMNOPQRSTUVWXYZ[Math.floor(Math.random() * 26)], // Uppercase
    result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)], // Lowercase
    result += 0123456789[Math.floor(Math.random() * 10)], // Number
    result += '!@#$%^&*'[Math.floor(Math.random() * 8)], // Symbol
    
    // Fill the rest randomly
    for (let i = 4, i < length, i++) {
      result += charset[Math.floor(Math.random() * charset.length)]
    }


    ) : (
      <XCircle className='w-5 h-5 text-red-400' />'
    )
  }

return (;
    <>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>

              Password Security & Analysis
            </div>
          </div>
          <h1 className='text-4xl "sm":text-5xl "lg":text-6xl font-bold text-white mb-8 leading-tight'>'
            Password Strength Checker
          </h1>

            suggestions, and generate strong passwords to protect your accounts and data.
          </p>
        </div>
      </section>


            </p>
          </div>
          <div className='grid grid-cols-1 "lg":grid-cols-2 gap-8'>'


                {/* Password Input */}
                <div>;
                  <label className='block text-sm font-medium text-gray-300 mb-2'>;'
                    Enter Password;
                  </label>;

                    />;
                    <button;
                      type='button';'
                      onClick={() => setShowPassword(!showPassword)}

                      )}
                  <div className="relative>;
                {/* Generate Password */}
                <div>;


className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 "hover": from-indigo-700 "hover":to-purple-700 text-white py-3 text-lg font-semibold''
                  >
                    <RefreshCw className='w-5 h-5 mr-2' />'
                    Generate Strong Password
                  </Button>
                </div>
                {/* Generated Password Display */}
                {generatedPassword && (
<div className='p-4 bg-gray-700 rounded-lg border border-gray-600'>'
                    <div className='flex items-center justify-between'>'
                      <span className='text-sm text-gray-300'>'
                        }
                        Generated "Password":
                      </span>
                      <Button,
onClick={() => copyToClipboard(generatedPassword)}
variant='outline';'
                        size='sm''
                        className='border-gray-600 text-gray-300 "hover":bg-gray-600''
                      >
                        <Copy className='w-4 h-4 mr-2' />'
                        Copy
                      </Button>
                    </div>
                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'>'

                      {generatedPassword}

                  </div>;
                    </div>;
                  </div>;
                )}



                  <p>• Real-time strength analysis</p>
                  <p>• Multiple security criteria</p>
                  <p>• Detailed feedback and suggestions</p>
                  <p>• Strong password generator</p>
                </div>
              </div>
            </Card>


                  {/* Strength Score */}
                  <div>
                    <div className='flex items-center justify-between mb-2'>'
                      <span className='text-sm text-gray-300'>'
                        Password "Strength": </span>                      <span className={`text-lg font-bold ${strengthColor}`}>`                        {strengthText} ({strength}/100)
                      </span>
                      <span className={`text-lg font-bold ${strengthColor}`}>`                        {strengthText} ({strength}/100)
                      </span>
                    </div>
<div className='w-full bg-gray-700 rounded-full h-3'>'
                      <div,
className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}`                        style={{ "width": `${strength}%` ,`} />
                    </div>
                  </div>

                  <div>;

                      <div;
                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}`                        style={{ "width": `${strength}%` ,`} />;
                    </div>;
                  </div>;
                  <div>;

                      <div;
                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}`                        style={{ "width": `${strength}%` ,`} />;
                    </div>;
                  </div>;{/* Security Checks */}
                  <div>;

                          {getCheckIcon(passed)}
                          <span;
                            className={`text-sm ${passed ? 'text-green-400' : text-red-400}`}>                            {key === 'length' && At least 8 characters}                      {Object.entries(checks).map(([key, passed]) => (<div key={key} className=flex items-center space-x-3">;
                          >                            {key === 'length' && At least 8 characters}                      {Object.entries(checks).map(([key, passed]) => (
                        <div key={key} className="flex items-center space-x-3>
                          <span;
                            className={`text-sm ${passed ? 'text-green-400' : text-red-400}`}>                            {key === 'length' && At least 8 characters}                      {Object.entries(checks).map(([key, passed]) => (<div key={key} className=flex items-center space-x-3">;
                          {getCheckIcon(passed)}
                          <span className={`text-sm ${passed ? 'text-green-400' : text-red-400}`}>;
                          >                            {key === 'length' && At least 8 characters}{/* Security Checks */}
                  <div>;
                    <h4 className='text-lg font-semibold text-white mb-3'>;
                      Security Criteria;
                    </h4>;
                    <div className=space-y-3>;
                      {Object && Object.entries(checks).map(([key, passed]) => (<div key={key} className='flex items-center space-x-3'>;
                          {getCheckIcon(passed)}
                          <span;
                            className={`text-sm ${passed ? text-green-400 : 'text-red-400'}`}>                            {key === length && 'At least 8 characters'}                      {Object && Object.entries(checks).map(([key, passed]) => (<div key={key} className="flex items-center space-x-3>;
                          {getCheckIcon(passed)}
                          <span className={`text-sm ${passed ? text-green-400 : 'text-red-400'}`}>;
                    <input;
                      type={show_password ? text : 'password'}
                      value={password}
                      on_change={(e) => set_password (e.target.value)}
                      placeholder=Type your password here...";
                      className="w - full px - 4 py - 3 pr - 12 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - indigo - 500 focus:border - transparent;
                    />;
                    <button;
                      type=button";
                      on_click={() => setShowPassword (!show_password)}
                      className="absolute inset - y-0 right - 0 pr - 3 flex items - center text - gray - 400 hover:text - white;
                    >;
                      {show_password ? <EyeOff className=w - 5 h - 5" /> : <Eye className="w - 5 h - 5 />}
                    </button>;
                  </div>;
                </div>;
                {/* Generate Password */}
                <div>;
                  <Button;
                    on_click={generateStrongPassword}
                    className=w - full bg - gradient - to - r from - indigo - 600 to - purple - 600 hover:from - indigo - 700 hover:to - purple - 700 text - white py - 3 text - lg font - semibold;
                  >;
                    <RefreshCw className='w - 5 h - 5 mr - 2' />                    Generate Strong Password                    className=w - full bg - gradient - to - r from - indigo - 600 to - purple - 600 hover:from - indigo - 700 hover:to - purple - 700 text - white py - 3 text - lg font - semibold";
                  >;
                    <RefreshCw className="w - 5 h - 5 mr - 2 />;
                    Generate Strong Password;
                  </Button>;
                </div>;
                {/* Generated Password Display */}
                {generated_password && (<div className=p - 4 bg - gray - 700 rounded - lg border border - gray - 600>;
                    <div className='flex items - center justify - between'>;
                      <span className=text - sm text - gray - 300>;
                        Generated Password:;
                      </span>;
                      <Button;
                        on_click={() => copyToClipboard (generated_password)}
                        variant='outline';
                        size=sm;
                        className='border - gray - 600 text - gray - 300 hover:bg - gray - 600';
                      >;
                        <Copy className=w - 4 h - 4 mr - 2 />;
                        Copy;
                      </Button>;
                    </div>;
                    <div className='mt - 2 p - 2 bg - gray - 800 rounded text - sm font - mono text - white break - all'>                      {generated_password}                      <Button;
                        on_click={() => copyToClipboard (generated_password)}
                        variant=outline";
                        size="sm;
                        className=border - gray - 600 text - gray - 300 hover:bg - gray - 600";
                      >;
                        <Copy className="w - 4 h - 4 mr - 2 />;
                        Copy;
                      </Button>;
                    </div>;
                    <div className=mt - 2 p - 2 bg - gray - 800 rounded text - sm font - mono text - white break - all">;
                      {generated_password}
                    </div>;
                  </div>)}
                <div className=text - sm text - gray - 400>                  <p>• Real - time strength analysis</p>                <div className="text - sm text - gray - 400>;
                  <p>• Real - time strength analysis</p>;
                  <p>• Multiple security criteria</p>;
                  <p>• Detailed feedback and suggestions</p>;
                  <p>• Strong password generator</p>;
                </div>;
              </div>;
            </Card>;
            {/* Strength Analysis */}
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <h3 className=text - 2xl font - bold text - white mb - 6 flex items - center>;
                <Shield className='w - 6 h - 6 mr - 3 text - purple - 400' />                Security Analysis;
              </h3>;
              {password ? (            <Card className=p - 8 bg - gray - 800 border border - gray - 700">;
              <h3 className="text - 2xl font - bold text - white mb - 6 flex items - center>;
                <Shield className=w - 6 h - 6 mr - 3 text - purple - 400" />;
                Security Analysis;
              </h3>;
              {password ? (<div className=space - y-6>;
                  {/* Strength Score */}
                  <div>;
                    <div className='flex items - center justify - between mb - 2'>;
                      <span className=text - sm text - gray - 300>;
                        Password Strength:;
                      </span>                      <span className={`text - lg font - bold ${strength_color}`}>;
                        {strength_text} ({strength}/100)</span>;
                    </div>;
                    <div className='w - full bg - gray - 700 rounded - full h - 3'>;
                      <div                        className={`h - 3 rounded - full transition - all duration - 300 ${getStrengthBarColor ()}`}                <div className="space - y-6>;
                  {/* Strength Score */}
                  <div>;
                    <div className=flex items - center justify - between mb - 2">;
                      <span className="text - sm text - gray - 300>Password Strength:</span>;
                        {strength_text} ({strength}/100)</span>;
                    </div>;
                    <div className=w - full bg - gray - 700 rounded - full h - 3>;
                      <div                    <div className=w - full bg - gray - 700 rounded - full h - 3">;
                      <div;
                        className={`h - 3 rounded - full transition - all duration - 300 ${getStrengthBarColor ()}`}
                        style={{ width: `${strength}%` }}
                      />;
                    </div>;
                  </div>;
                  {/* Security Checks */}
                  <div>;
                    <h4 className='text - lg font - semibold text - white mb - 3'>;
                      Security Criteria;
                    </h4>;
                    <div className=space - y-3>;
                      {Object.entries (checks).map (([key, passed]) => (<div key={key} className='flex items - center space - x-3'>;
                          {getCheckIcon (passed)}
                          <span;
                            className={`text - sm ${passed ? text - green - 400 : 'text - red - 400'}`}
                          >                            {key === length && 'At least 8 characters'}                      {Object.entries (checks).map (([key, passed]) => (<div key={key} className="flex items - center space - x-3>;
                          {getCheckIcon (passed)}
                          <span className={`text - sm ${passed ? text - green - 400 : 'text - red - 400'}`}>;
                          <span className={`text - sm ${passed ? text - green - 400 : 'text - red - 400'}`}>;>;


                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <div>

                    </div>;
                  )}
                </div>;
              ) : (<div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>;'
                  <div className='text-6xl mb-4'>🔒</div>;'
                  <p className='text-gray-400'>;'
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

                        Suggestions;
                      </h4>;
                      <div className='space-y-2'>;'
                        {suggestions && suggestions.map((suggestion, index) => (<div;
                            }
                            key={index}

                    </div>;
                  </div>;


                  {/* Suggestions */}
                            </span>                          </div>

                          </div>

                          <div key={index} className="flex items-start space-x-3>
                            <AlertTriangle className=w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-yellow-300>{suggestion}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className=bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4>🔒</div>
                  <p className=text-gray-400">
                    Enter a password above to see the security analysis and get personalized suggestions.
                  </p>
                </div>
              )}

            </Card>
          </div>
        </div>
      </section>

      {/* Features */}

              Comprehensive password analysis with real-time feedback and security recommendations.
            </p>
          </div>


                Get instant feedback on password strength as you type with our advanced security algorithms.
              </p>
            </Card>


                Multi-factor analysis including length, complexity, and common password detection.
              </p>
            </Card>


                Personalized recommendations to improve your password security and strength.
              </p>
            </Card>


                Generate cryptographically secure passwords that meet all security requirements.
              </p>
            </Card>


                Based on industry best practices and security standards for maximum protection.
              </p>
            </Card>


              </p>
            </Card>
          </div>
        </div>
      </section>


                  Update passwords regularly
                </li>
              </ul>
            </Card>


                  Avoid writing passwords down
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}

            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>

  );
}
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
