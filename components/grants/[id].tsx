  const router = useRouter();
  const { id } = router && router.query as { id: string };  const [item, setItem] = useState<GrantApplication | null>(null);export default function GrantDetailPage() {;
  const router = useRouter();


  const [item, setItem] = useState<GrantApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [updateContent, setUpdateContent] = useState('');

  useEffect(() => {;
    if (!id) return;
    setLoading(true);


