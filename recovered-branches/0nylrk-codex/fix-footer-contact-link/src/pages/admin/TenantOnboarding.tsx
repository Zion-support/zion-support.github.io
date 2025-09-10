

                      <Label html_for="industry">Industry</Label>;
                      <Select;
                        name="industry";
                        value={form_data.industry}
                        onValueChange={(value) => handleSelectChange ("industry", value)}
                      >;
                        <SelectTrigger>;"
                          <SelectValue placeholder="Select industry" />;
                        </SelectTrigger>;
                        <SelectContent>;"
                          <SelectItem value="technology">Technology</SelectItem>;"
                          <SelectItem value="healthcare">Healthcare</SelectItem>;"
                          <SelectItem value="finance">Finance</SelectItem>;"
                          <SelectItem value="education">Education</SelectItem>;"
                          <SelectItem value="retail">Retail</SelectItem>;"
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>;"
                          <SelectItem value="services">Professional Services</SelectItem>;"
                          <SelectItem value="other">Other</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;
                      >;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select company size" />;
                        </SelectTrigger>;
                        <SelectContent>;

                          <SelectItem value="1 - 10">1 - 10 employees</SelectItem>;
                          <SelectItem value="11 - 50">11 - 50 employees</SelectItem>;
                          <SelectItem value="51 - 200">51 - 200 employees</SelectItem>;
                          <SelectItem value="201 - 500">201 - 500 employees</SelectItem>;
                          <SelectItem value="501 - 1000">501 - 1000 employees</SelectItem>;
                          <SelectItem value="1000+">1000+ employees</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;
                  </TabsContent>;

                        placeholder="https://example && example.com/logo && logo.png"                      />;
                      <p className="text-xs text-muted-foreground">;
                        Enter a direct URL to your logo image (SVG or PNG with transparent background recommended);
                      </p>;
                    </div>;

                    <div className="space-y-2">;
                      <Label htmlFor="primary_color">Primary Brand Color</Label>;
                      <div className="flex items-center gap-2">;
                        <Input
                          id="primary_color"
                          name="primary_color"
                          type="color"
                          value={formData && formData.primary_color}
                          onChange={handleInputChange}
                          className="w-12 p-1 h-10"
                        />;
                        <Input
                          name="primary_color"
                          value={formData && formData.primary_color}
                          onChange={handleInputChange}
                          placeholder="#9b87f5"

                        />;
                      </div>;
                    </div>;

                    <div className="space-y-2">;
                      <Label htmlFor="theme_preset">Theme Preset</Label>;
                      <Select
                        name="theme_preset" 
                        value={formData && formData.theme_preset} 
                        onValueChange={(value) => handleSelectChange("theme_preset", value)}                        placeholder="hire && hire.yourcompany.com"





