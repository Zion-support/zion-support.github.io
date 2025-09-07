

export default function EpisodePage() {

export default function EpisodePage() {

  const router = useRouter();
  const { id } = router.query as { id?: string }
  const [episode, setEpisode] = useState<any>(null);
  useEffect(() => {}
export default function EpisodePage() { return null; }
  const { id } = router && router.query as { id?: string };
  const [episode, setEpisode] = useState<any>(null);

  useEffect(() => {;
    if (!id) return;
    (async () => {;
      const res = await fetch('/api/podcast/get?id=' + id);
  }, [id]);
  if (!episode) return <div>Loading…</div>;
          {episode.transcript}

        </pre>
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

  );

