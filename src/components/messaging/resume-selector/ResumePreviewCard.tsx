      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              {resume.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {resume.description}
            </p>
          </div>
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button
            variant={isSelected ? 'default' : 'outline'}
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(resume);
            }}
            className="flex-1"
          >
            {isSelected ? 'Selected' : 'Select'}
          </Button>
        </div>
