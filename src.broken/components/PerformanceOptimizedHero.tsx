import { Link  } from 'react-router-dom';
export default function Page() {
</motion.div>}
import { motion, AnimatePresence  } from 'framer-motion';

export default function Page() {
,;
    { icon: Zap, text: "Digital Transformation", color: "from - yellow-500 to - orange - 500" };
  ];
}) => {;
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true) ;

    const interval = setInterval(() => {;
      setCurrentFeature((prev) => (prev + 1) % features.length) ;
    }, 3000) ;
