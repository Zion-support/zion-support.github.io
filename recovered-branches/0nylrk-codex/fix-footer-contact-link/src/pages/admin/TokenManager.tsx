  const [userId, setUserId] = useState(''),
  const [amount, setAmount] = useState(0),
  const isAdmin = user?.userType === 'admin',
      .limit(100),
    if (!error) setTransactions(data || []),
  },
}