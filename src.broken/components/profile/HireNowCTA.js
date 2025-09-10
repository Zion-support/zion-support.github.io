            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                  Budget Range
                </label>
                <Input id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., $1000-5000" className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" required/>
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">
                  Start Date
                </label>
                <Input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white focus:border-zion-cyan" required/>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Additional Message
              </label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any additional details or questions..." className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan" rows={3}/>
            </div>

            <div className="flex gap-3">
              <Button type="submit" className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                Send Message
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)} className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                Cancel
              </Button>
            </div>
          </form>)}
      </CardContent>
    </Card>);
}
:src/components/profile/HireNowCTA.jsx
            message: ''}
    );
        setIsFormOpen(false)};
            message: ''
        });
        setIsFormOpen(false);
    };