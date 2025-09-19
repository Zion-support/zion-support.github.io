import dynamic from 'next/dynamic';

export default function BookBuilderPage() {,
  return <BookBuilder />,
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false ,});
export default function BookBuilderPage() {,
  return <BookBuilder />;
};
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false ,});
export default function BookBuilderPage(req, res) {,
  try {,
  return <BookBuilder />;
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
}
,