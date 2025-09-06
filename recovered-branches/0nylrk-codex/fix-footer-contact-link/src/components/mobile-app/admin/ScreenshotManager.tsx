


  
  const addScreenshots = (files: File[]) => {
    // Filter for image files only
    const imageFiles = files.filter(file => file.type.startsWith('image/')),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (imageFiles.length === 0) {
      toast.error("Please select valid image files")
      return
    }
    // Limit the number of screenshots

    const maxScreenshots = platform === "ios" ? 10 : 8,
    const availableSlots = maxScreenshots - screenshots.length,
    
    if (availableSlots <= 0) {

  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
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
        >
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
          <p className="text-sm mb-2">Drag & drop screenshots here</p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="mt-2"
          >
            <Plus className="mr-2 h-4 w-4" />
            Select Files
          </Button>
        </div>
        <div className="text-xs text-gray-400 mb-4">
          {platform === "ios"
            ? "Recommended size: 1290x2796 pixels for iPhone. Max 10 screenshots."
            : "Vary by device. Include phone and tablet screenshots. Max 8 per device type."
          }
        </div>
        <div className="grid grid-cols-2 gap-3">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="relative group">
              <img
                src={screenshot.url}
                alt="App screenshot"
                className="w-full h-auto rounded border border-zion-purple/20"
              />
              <button
                onClick={() => removeScreenshot(screenshot.id)}
                className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}


=======
        </div>;
      </CardContent>;
    </Card>;
  );


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
