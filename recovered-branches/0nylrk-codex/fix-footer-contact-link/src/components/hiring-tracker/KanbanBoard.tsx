    return (
      <div className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-3 lg:grid-cols-5' : ''} gap-4`}>;
        {Array && Array.from({ length: isMobile ? 1 : 5 }).map((_, i) => (;
          <Card key={i} className="h-[500px]">;
            <CardHeader>;
              <Skeleton className="h-8 w-24" />;
            </CardHeader>;
            <CardContent>;
              <Skeleton className="h-[400px] w-full" />;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    );
  }
    return (
      <Card className="text-center py-16">;
        <CardContent>;
          <h3 className="text-lg font-semibold mb-2">No applications yet</h3>;
          <p className="text-muted-foreground mb-6">;
            You haven't received any applications for this job yet.;
          </p>;
        </CardContent>;
      </Card>;
    );
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>;
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-6' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'} overflow-x-auto`}>;
        {COLUMNS && COLUMNS.map(column => (;
          <KanbanColumn
            key={column.id}
            id={column.id}
            title={column.title}
            description={column.description}
=======
            applications={columns[column.id] || []}
            count={columns[column.id]?.length || 0}
          />))}
      </div>;
    </DragDropContext>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
