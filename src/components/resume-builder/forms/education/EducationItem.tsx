

export function EducationItem(_{_education, _onEdit, _onDelete}: EducationItemProps) {_return (
    <Card className="bg-muted/40">
      <CardContent className="pt-6">
        <div className="flex justify-between">
          <div>
            <h4 className="font-medium">{education.degree}</h4>
            <p className="text-sm text-muted-foreground">{_education.institution}</p>
            {_education.field_of_study && (
              <p className="text-sm text-muted-foreground">{education.field_of_study}</p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {_typeof education.start_date === 'string' 
                ? education.start_date 
                : format(education.start_date, _'MMM yyyy')} - {_education.is_current 
                ? 'Present' 
                : (education.end_date ? (typeof education.end_date === 'string' 
                  ? education.end_date 
                  : format(education.end_date, _'MMM yyyy')) : '')}
            </p>
            {_education.location && (
              <p className="text-xs text-muted-foreground">{education.location}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={_() => onEdit(education)}
              aria-label="Edit education"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={_() => onDelete(education.id!)}
              aria-label="Delete education"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {_education.description && (
          <p className="text-sm mt-3 line-clamp-2">{education.description}</p>
        )}
      </CardContent>
    </Card>
  );
}
