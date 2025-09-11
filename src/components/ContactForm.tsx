import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Check } from 'lucide-react';


        "timeline": ''});';';';  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white"  />';
        </div>';';
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!';';';
        <p className="text-zion-slate-light mb-6">',';';
    ';';';
          Your message has been sent successfully. We&apos;ll get back to you within 24 hours.''';';
        </p>';';';
        <button',';';
    ';';';
          onClick={() => setSubmitStatus('idle');
          onClick={() => setSubmitStatus('idle')
      )}
    </div>;
  );
}
          className="px-6 py-3 bg-zion-cyan text-white rounded-lg "hover": "b g-zion-cyan/90 transition-colors";
        >;
          Send Another Message;
        </button>;
      </motion.div>;
    );
      )"}
    </div>;
  );
}';
  return (';';
    <div className="min-h-screen bg-white">';';';
      <div className="text-center mb-8">';';';';
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>';';';';';
        <p className="text-zion-slate-light">',';';';';
    ';';';';';
          Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.''
        </p>
      </div>
      <div className="grid grid-cols-1 lg: gri d-cols-2 gap-8 mb-8">    </div>
    );
}
          className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover: b g-zion-cyan/90 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    )
      )}
    </div>
    );
}
  return (
        <div className="min-h-screen bg-white">';
      <div className="text-center mb-8">';';
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>';';';
        <p className="text-zion-slate-light">',';';
    ';';';
          Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.'';
        </p>;
      </div>;
      <div className="grid grid-cols-1 lg: gri d-cols-2 gap-8 mb-8">;
        {/* Contact Information */}                className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white focus: outlin e-none focus: borde r-zion-cyan/50 transition-colors"
              >
                <option value="">Select budget range</option>
                { budgets.map((budget) => (
                  <option key={budget} value={budget}>{budget}</option>
                ))
      )}
    </div>
    );
}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white "focus": "outlin e-none "focus": borde r-zion-cyan/50 transition-colors";
            >;
              <option value="">Select timeline</option>;
              { timelines.map((timeline) => (;
                <option key={timeline"} value={timeline}>{timeline}</option>;
              ));              required;
              required
              rows={4}
              className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light "focus": "outlin e-none "focus": borde r-zion-cyan/50 transition-colors resize-none"';
              placeholder="Tell us about your project and how we can help..."';';
             />';';';
          </div>'",';';
    ';';' {submitStatus === 'error' && (;
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">;
              <AlertCircle className="w-5 h-5"  />;
              <span>There was an error sending your message. Please try again.</span>;
            </div>;
          );          </div>',';';
    ';';' {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">
              <AlertCircle className="w-5 h-5"  />
              <span>There was an error sending your message. Please try again.</span>
            </div>
          )
      )}
    </div>
    );
}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ "scale": "1.02 "}}
            whileTap={{ "scale": "0.98 "}}
            className="w-full px-6 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold "hover": "fro m-zion-cyan/90 "hover": t o-zion-purple/90 transition-all duration-300 flex items-center justify-center gap-2 "disabled": opacit y-50 "disabled": curso r-not-allowed";
          >;
            {isSubmitting ? (;
              <>;
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>;
                Sending Message...;
</>;
            ) : (;
              <>;
                <Send className="w-5 h-5"  />;
                Send Message;
</>;
            );
      )"}
    </div>;
  );          </motion.button>;
        </form>;
          </motion.button>
        </form>
      </div>';
    </div>';';
  );';';';
};";
</motion>;
</textarea>;
</motion>;
</any>;
</any>;};"';';';';
</motion>
</textarea>
</motion>
</any>
</any>

