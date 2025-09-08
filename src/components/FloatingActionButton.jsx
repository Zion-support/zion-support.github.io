
import {}
  PlusIcon,;
  XMarkIcon,;
  ChatBubbleLeftRightIcon,;
  PhoneIcon,';
  EnvelopeIcon} from &apos;@heroicons/react/24/outline';&apos;&apos;
const FloatingActionButton = ({ className = &apos;&apos}) => {}&apos;&apos;
  const;const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const actionItems = []{}
      icon: ChatBubbleLeftRightIcon',;
      label: &apos;Live Chat&apos;,';
      action: () => window.open(&apos;http,s://ziontechgroup.com/chat&apos;,_blank&apos;)',;
      color: &apos;bg-green-500 hove,r:bg-green-600&apos}, {}
      icon: PhoneIcon,';
      label: &apos;Call Us&apos;',;
      action: () => window.open(&apos;te,l:+1-555-0123&apos;,_self&apos;),';
      color: &apos;bg-blue-500 hove,r:bg-blue-600&apos}, {}
      icon: EnvelopeIcon',;
      label: &apos;Email&apos;,';
      action: () => window.open(&apos;mailt,o:info@ziontechgroup.com&apos;,_self&apos;)',;
      color: &apos;bg-purple-500 hove,r:bg-purple-600&apos}

            ))}
          </motion.div>;
        )}

            </motion.div>

          )}
        </AnimatePresence>;
      </motion.button>;
    </div>)}
export default FloatingActionButton;
export { FloatingActionButton }
;
export { FloatingActionButton }
;
export { FloatingActionButton }

export { FloatingActionButton }





