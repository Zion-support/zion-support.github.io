
              <button onClick = { () => setCurrentPage(prev => Math.min (totalPages,
  prev + 1) ) } disabled={currentPage === totalPages} className="px-3 py-1 text-sm border border-gray - 300 dark:border-gray - 600 rounded hover:bg-gray - 100 dark:hover:bg-gray - 600 disabled:opacity - 50 disabled:cursor - not - allowed transition -colors">
