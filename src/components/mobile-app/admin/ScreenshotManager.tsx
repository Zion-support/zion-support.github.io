

    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle className="text-lg">App Screenshots</CardTitle>
      </CardHeader>
      <CardContent>


        <div 
          className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
            isDragging 
              ? "border-zion-cyan bg-zion-cyan/10" 
              : "border-zion-purple/30"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}


