export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2"
          onClick={() => router.back()} // Changed to router.back()
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          Back
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">{title}</h1>
      </div>
    </div>
  )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
