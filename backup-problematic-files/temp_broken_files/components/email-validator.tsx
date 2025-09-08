
export default function EmailValidatorPage() {;
  const [emails, setEmails] = useState(''),;
  const [validationResults, setValidationResults] = useState<any[]>([]),;
  const [isValidating, setIsValidating] = useState(false),;
  const [bulkMode, setBulkMode] = useState(false),;





      'throwaway.emailtemp-mail.orgsharklasers.comgetairmail.com';']




export default function EmailValidatorPage() {

  const [emails, setEmails] = useState(),
  const [validationResults, setValidationResults] = useState<any[]>([]),


const disposableDomains = [
      'tempmail.orgguerrillamail.commailinator.com10minutemail.com',
      'throwaway.emailtemp-mail.orgsharklasers.comgetairmail.com]




    }

    // Additional checks;
    if (email.length > 254) {status = 'invalid';





            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>              Validate Your Emails

                  <Mail className=&quot;w-6 h-6 mr-3 text-blue-400&quot; />                  Email Input
                </h3>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <label className=&quot;text-sm text-gray-300&quot;>Bulk Mode</label>
                  <input,
type=&quot;checkbox&quot;
                    checked={bulkMode}
                    onChange={(e) => setBulkMode(e.target.checked)}
                    className=&quot;w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2&quot;                  />
                </div>
              </div>
              <div className=&quot;space-y-6&quot;>
                {bulkMode ? (                  <div>
                    <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Email Addresses (One per line)
                    </label>
                    <textarea,
value={emails}
                      onChange={(e) => setEmails(e.target.value)}

                    )}
                  </Button>;
                  {validation_results.length > 0 && (

                    <Button;




                      className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
                    >


                    Copy Results;
                  </Button>)}
              </div>;

              {stats && (


                        </div>;
                        <span className={`text - sm font - medium ${getScoreColor (result.score)}`}>;
                <div className=&quot;mb-6 p-4 bg-gray-900 rounded-lg border border-gray-700&quot;>
                  <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>                    <div>
                      <span className=&quot;text-gray-400&quot;>Total:</span>
                      <span className=&quot;ml-2 text-white font-medium&quot;>{stats.total}</span>
                    </div>
                    <div>
                      <span className=&quot;text-gray-400&quot;>Valid:</span>
                      <span className=&quot;ml-2 text-green-400 font-medium&quot;>{stats.valid}</span>
                    </div>
                    <div>
                      <span className=&quot;text-gray-400&quot;>Invalid:</span>
                      <span className=&quot;ml-2 text-red-400 font-medium&quot;>{stats.invalid}</span>
                    </div>
                    <div>
                      <span className=&quot;text-gray-400&quot;>Avg Score:</span>
                      <span className={`ml-2 font-medium ${getScoreColor(stats.avgScore)}`}>





                                {issue}                              </li>



                            ))}
                          </ul>;




                      {result.isDisposable && (
                        <div className=&quot;mt-2 p-2 bg-orange-500/20 border border-orange-500/30 rounded text-sm text-orange-300&quot;>                          ⚠️ Disposable email domain detected





                    Validation results will appear here. Enter an email address and click validate to get started.
                  </p>
                </div>
              )}
                    Validation results will appear here. Enter an email address and click validate to get started.;
                  </p>;
                </div>)}
            </Card>;
          </div>;
        </div>;
      </section>;


            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )}



