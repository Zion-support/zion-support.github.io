

type ProposalListItem = {
  id: string
  title: string
  targetInstitution: string
  regionalScope: string
  type: string
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted'
  createdAt: string

  useEffect__(() => {

    fetch('/api/proposals')
      .then((r) => r.json())
      .then((d) => setItems(d.items |[]))
      .catch(() => setItems([]))

  return (
    <EnhancedLayout>

            <option>All</option>
            <option>Global</option>
            <option>Africa</option>
            <option>LATAM</option>
            <option>APAC</option>
            <option>EU</option>
          </select>
        </div>

        </div>
        <div className="text-sm text-gray-600">Community commentary per region coming next. For now, proposals expose a comments API endpoint.</div>

      </div>
    </EnhancedLayout>

  )
