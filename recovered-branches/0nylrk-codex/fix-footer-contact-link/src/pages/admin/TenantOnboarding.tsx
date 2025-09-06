    }
  }

  return (
                    <TabsTrigger value="company">Company Info</TabsTrigger>;
                    <TabsTrigger value="branding">Branding</TabsTrigger>;
                    <TabsTrigger value="domain">Domain Setup</TabsTrigger>;
                  </TabsList>;
                      <Input
                        id="brand_name"
                        name="brand_name"
                        value={formData && formData.brand_name}
                        onChange={handleInputChange}
                        placeholder="Acme Corporation"
                        required
                      >;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select industry" />;
                        </SelectTrigger>;
                        <SelectContent>;
                          <SelectItem value="technology">Technology</SelectItem>;
                          <SelectItem value="healthcare">Healthcare</SelectItem>;
                          <SelectItem value="finance">Finance</SelectItem>;
                          <SelectItem value="education">Education</SelectItem>;
                          <SelectItem value="retail">Retail</SelectItem>;
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>;
                          <SelectItem value="services">Professional Services</SelectItem>;
                          <SelectItem value="other">Other</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;
                      >;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select company size" />;
                        </SelectTrigger>;
                        <SelectContent>;
                          <SelectItem value="1000+">1000+ employees</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;
                  </TabsContent>;
                      <Input
                        id="logo_url"
                        name="logo_url"
                        value={formData && formData.logo_url}
                        onChange={handleInputChange}
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
                      >;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select theme" />;
                        </SelectTrigger>;
                        <SelectContent>;
                          <SelectItem value="light">Light</SelectItem>;
                          <SelectItem value="dark">Dark</SelectItem>;
                          <SelectItem value="corporate">Corporate</SelectItem>;
                          <SelectItem value="startup">Startup</SelectItem>;
                          <SelectItem value="neon">Neon</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;
                      <Switch
                        id="is_co_branded"
                        checked={formData && formData.is_co_branded}
                        onCheckedChange={(checked) => handleSwitchChange("is_co_branded", checked)}
                        <Input
                          id="subdomain"
                          name="subdomain"
                          value={formData && formData.subdomain}
                          onChange={handleInputChange}
                          placeholder={formData && formData.brand_name ? formData && formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, '') : "company"}
                          className="rounded-r-none"
                      <Input
                        id="custom_domain"
                        name="custom_domain"
                        value={formData && formData.custom_domain}
                        onChange={handleInputChange}
                        If you want to use your own domain, enter it here. You'll need to configure DNS records.;
                      </p>;
                    </div>;
                  </TabsContent>;
                </Tabs>;
                  </Button>;
                </div>;
              </form>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
