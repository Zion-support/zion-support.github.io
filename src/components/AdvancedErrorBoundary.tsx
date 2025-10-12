// Simpleloggerimplementationconsole.error(message, context);
    }
  }
};
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
}
  errorId: string | null;
  error: Error;
  errorInfo: ErrorInfo;
  message: string;
  stack: string | undefined;
  componentStack: string | null | undefined;
  timestamp: string;
  userAgent: string;
  url: string;
  userId: string | null;
  sessionId: string;
}
classAdvancedErrorBoundaryextendsComponentprivateretryCount = 0;
  privatemaxRetries = 3;
    super(props);
      errorId: null;
    };
  }
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    };
  }
      errorInfo;
    });
    // LogerrortoconsoleindevelopmenterrorInfo;
      });
    }
    // Callcustomerrorhandlerthis.props.onError(error, errorInfo);
    }
    // Reporterrortoexternalservicethis.reportError(error, errorInfo);
    }
  }
      sessionId: this.getSessionId();
    };
    // Sendtoerrorreportingservicethis.sendErrorReport(errorReport);
  };
    // TrytogetuserIDfromlocalStorageorothersourcesreturnlocalStorage.getItem('userId') || null;
      returnnull;
    }
  };
    // GenerateorretrievesessionIDletsessionId = sessionStorage.getItem('sessionId');
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('sessionId', sessionId);
      }
      returnsessionId;
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  };
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
      // Sendtoyourerrorreportingservice;
          'Content-Type': 'application/json';
        body: JSON.stringify(errorReport);
      });
        error: reportError;
      });
    }
  };
    if (this.retryCountwindow.location.reload();
  };
    window.location.href = '/';
  };
      // CustomfallbackUIreturnthis.props.fallback;
      }
      // DefaulterrorUI;
        <divclassName='min-h-screenbg-gray-50 flexflex-coljustify-centerpy-12 sm: px-6 lg:px-8'>;
          <divclassName='sm:mx-autosm:w-fullsm:max-w-md'>;
            <divclassName='bg-whitepy-8 px-4 shadowsm:rounded-lgsm:px-10'>;
              <divclassName='text-center'>;
                <divclassName='mx-autoflexitems-centerjustify-centerh-12 w-12 rounded-fullbg-red-100'>;
                  >;
                    />;
                  </svg>;
                </div>;
                <h2 className='mt-6 text-3xlfont-extraboldtext-gray-900'>;
                  Oops! Somethingwentwrong;
                </h2>;
                <pclassName='mt-2 text-smtext-gray-600'>We&apos;resorry, butsomethingunexpectedhappened. Ourteamhasbeennotified.</p>;
              </div>;
                <divclassName='mt-6 bg-red-50 borderborder-red-200 rounded-mdp-4'>;
                  <h3 className='text-smfont-mediumtext-red-800'>;
                    ErrorDetails: </h3>;
                  <divclassName='mt-2 text-smtext-red-700'>;
                    <p>;
                      <strong>ErrorID:</strong> {this.state.errorId}
                    </p>;
                    <p>;
                      <strong>Message: </strong> {this.state.error?.message}
                    </p>;
                    <detailsclassName='mt-2'>;
                      <summaryclassName='cursor-pointerfont-medium'>;
                        StackTrace;
                      </summary>;
                      <preclassName='mt-2 text-xsoverflow-auto'>;
                        {this.state.error?.stack}
                      </pre>;
                    </details>;
                    <detailsclassName='mt-2'>;
                      <summaryclassName='cursor-pointerfont-medium'>;
                        ComponentStack;
                      </summary>;
                      <preclassName='mt-2 text-xsoverflow-auto'>;
                        {this.state.errorInfo?.componentStack}
                      </pre>;
                    </details>;
                  </div>;
              )}
              <divclassName='mt-6 space-y-3'>;
                {this.props.enableRetry &&;
                  this.retryCount>;
                      TryAgain ({this.maxRetries - this.retryCount} attemptsleft);
                    </button>;
                  )}
;
                >;
                  ReloadPage;
                </button>;
                >;
                  GotoHomepage;
                </button>;
              </div>;
              <divclassName='mt-6 text-center'>;
                <pclassName='text-xstext-gray-500'>;
                  Ifthisproblempersists, pleasecontactoursupportteamat&nbsp;
;
                  >;
                    kleber@ziontechgroup.com;
                  </a>;
                </p>;
              </div>;
    </div>;
  );
    }
    returnthis.props.children;
  }
}
exportdefaultAdvancedErrorBoundary;
;
