

    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>


          <Button variant="outline" size="sm" className="gap-2">
            {currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>


              className="cursor-pointer"
            >
              {resume.basic_info.title}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => setSaveDialogOpen(true)}
            className='cursor-pointer'          >
            <Plus className='h-4 w-4 mr-2' />            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
            <Plus className="h-4 w-4 mr-2" />
          <DropdownMenuSeparator />;
          <DropdownMenuItem;
          <DropdownMenuSeparator />;
          <DropdownMenuItem;

          <DropdownMenuSeparator />;
          <DropdownMenuItem;

            onClick={() => setSaveDialogOpen(true)}

          >
            <Plus className="h-4 w-4 mr-2" />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>


      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}


              placeholder="Enter resume title (e.g. DevOps Resume)"
            />
          </div>
          <DialogFooter>


              <Save className="h-4 w-4" />
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )

              disabled={!newResumeTitle && newResumeTitle.trim() || isLoading}
              className='gap-2'
              value = {newResumeTitle,}
              onChange = {(e,) => setNewResumeTitle(e && e.target.value),}
              placeholder="Enter resume title (e && e.g. DevOps Resume)";
            />;
          </div>;
          <DialogFooter>;
            <Button
              variant="outline" 
              onClick = {() => setSaveDialogOpen(false),}
            >;
              Cancel;
            </Button>;
            <Button
              onClick = {handleCreateNewVersion,}
              disabled = {!newResumeTitle && newResumeTitle.trim() || isLoading,}
              className="gap-2">;
              {isLoading && <Loader2 className='h-4 w-4 animate-spin' />}
              <Save className='h-4 w-4' />              Save              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              <Save className="h-4 w-4" />;
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>;
        <DialogContent className='sm:max - w-md'>;
          <DialogHeader>;
            <DialogTitle > Save as new resume version</DialogTitle>;
          </DialogHeader>;
          <div className='py - 4'>;
            <Input;
              value={newResumeTitle}
              on_change={e => setNewResumeTitle (e.target.value)}
              placeholder='Enter resume title (e.g. DevOps Resume)';
            />;
          </div>;
          <DialogFooter>;
            <Button variant='outline' on_click={() => setSaveDialogOpen (false)}>;
              Cancel;
            </Button>;
            <Button;
              on_click={handleCreateNewVersion}
              disabled={!newResumeTitle.trim () || is_loading}
              className='gap - 2';
              value = {newResumeTitle, }
              on_change = {(e, ) => setNewResumeTitle (e.target.value), }
              placeholder="Enter resume title (e.g. DevOps Resume)";
            />;
          </div>;
          <DialogFooter>;
            <Button;
              variant="outline";
              on_click = {() => setSaveDialogOpen (false), }
            >;
              Cancel;
            </Button>;
            <Button;
              on_click = {handleCreateNewVersion, }
              disabled = {!newResumeTitle.trim () || is_loading, }
              className="gap - 2";
            >;
              {is_loading && <Loader2 className='h - 4 w - 4 animate - spin' />}
              <Save className='h - 4 w - 4' />              Save              {is_loading && <Loader2 className="h - 4 w - 4 animate - spin" />}
              <Save className="h - 4 w - 4" />;
              Save;
            </Button>;
          </DialogFooter>;
        </DialogContent>;
      </Dialog>;


}
> {
  resume.basic info.title
}</DropdownMenuItem>) )
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>)
}"
}
;
  resume.basic info.title 
}</DropdownMenuItem>) ) ;
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) ;
}";
};
;

    </div>);
}
}
;
  resume.basic info.title 
}</DropdownMenuItem>) ) ;
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) ;
}";
};
;
;
}

}


;

    </div>);
}
> {
  resume.basic info.title;
}</DropdownMenuItem>) );
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h - 4 w - 4 mr - 2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle > Save as new resume version</DialogTitle> </DialogHeader> <div className="py - 4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>);
}";

