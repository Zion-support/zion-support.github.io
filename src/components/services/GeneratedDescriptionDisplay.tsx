export function GeneratedDescriptionDisplay({
  description,
  onSave,
}: GeneratedDescriptionDisplayProps) {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {
    onSave(editedDescription);
    setIsEditing(false);
    toast({
      title: 'Description Saved',
      description: 'Your edited description has been saved.',
    });
  };

  return (
    <Card className='border border-zion-blue-light bg-zion-blue-dark'>
      <CardHeader>
        <CardTitle className='text-white flex items-center justify-between'>
          Generated Description

          >
            {isEditing ? (
              <>
                <Check className='h-4 w-4 mr-1' />
                Done
              </>
            ) : (
              <>
                <Pencil className='h-4 w-4 mr-1' />
                Edit
              </>
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea

          />
        ) : (
          <div className='bg-zion-blue p-4 rounded-md text-white min-h-[300px] whitespace-pre-wrap'>
            {editedDescription}
          </div>
        )}
      </CardContent>
      {isEditing && (
        <CardFooter>

          >
            Save Changes
          </Button>
        </CardFooter>
      )}
    </Card>
  );

  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;
}</Button> </CardTitle> </CardHeader> <CardContent> {;
  isEditing ? (<Textarea value= {;
  editedDescription ;
}</div>) ;
}</CardContent> {;
  isEditing && (<CardFooter> <Button onClick={;
  handleSave ";
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) ;
}</Card>) ;
}'"

}