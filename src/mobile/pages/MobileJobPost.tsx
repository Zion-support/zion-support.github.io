
return (<div className="space-y-4">
      <h2 className="text-lg font-medium">Job Requirements</h2>
      <div className="space-y-2">
        <Label htmlFor="experience">Experience Level</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entry">Entry Level</SelectItem>
            <SelectItem value="mid">Mid Level</SelectItem>
            <SelectItem value="senior">Senior</SelectItem>
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="education">Education</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select required education" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high_school">High School</SelectItem>
            <SelectItem value="associate">Associate Degree</SelectItem>
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="master">Master's Degree</SelectItem>
            <SelectItem value="phd">PhD</SelectItem>
            <SelectItem value="none">No Specific Requirement</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Required Skills</Label>
        <div className="flex flex-wrap gap-2 mb-3">
          <Input
value = {newSkill}
            onChange = {(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
